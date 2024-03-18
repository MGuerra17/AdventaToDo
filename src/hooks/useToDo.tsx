import {useState, useEffect} from 'react';
import {Todo} from '../interfaces/toDo';
import {api} from '../api';
import {Alert} from 'react-native';

export default function useToDo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteTodoId, setDeleteTodoId] = useState<string | null>(null);

  useEffect(() => {
    const getTodos = async () => {
      const response = await api.todo.get();
      if (response.error != null) {
        Alert.alert('Error', 'Ha ocurrido un error al obtener las tareas');
        setLoading(false);
        return;
      }
      setLoading(false);
      setTodos(response.data);
    };

    getTodos();
  }, []);

  const handleNewTodo = async (newTodo: Todo) => {
    setLoading(true);
    const {error} = await api.todo.create(newTodo);

    if (error != null) {
      Alert.alert('Error', 'Ha ocurrido un error al crear la tarea');
      return;
    }

    const newTodos = [...todos, newTodo];

    setLoading(false);
    setTodos(newTodos);
  };

  const handleToggleComplete = async (id: string) => {
    setLoading(true);
    const selectedToDo = todos.find(todo => todo.id === id);
    const newToDo = {
      ...selectedToDo,
      completed: !selectedToDo?.completed,
    } as Todo;

    const {error} = await api.todo.update(newToDo);

    if (error != null) {
      Alert.alert('Error', 'Ha ocurrido un error al actualizar la tarea');
      return;
    }

    setLoading(false);
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map(todo => (todo.id === id ? newToDo : todo)),
    );
  };

  const handleDelete = async (id?: string | null) => {
    if (!id) return;

    setLoading(true);
    const {error} = await api.todo.delete(id);

    if (error != null) {
      Alert.alert('Error', 'Ha ocurrido un error al eliminar la tarea');
      return;
    }

    const newTodos = todos.filter(todo => todo.id !== id);

    setLoading(false);
    setTodos(newTodos);
  };

  return {
    todos,
    loading,
    deleteTodoId,
    setDeleteTodoId,
    handleNewTodo,
    handleToggleComplete,
    handleDelete,
  };
}
