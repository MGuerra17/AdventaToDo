import React from 'react';
import {ToDoCategory, Todo} from '../interfaces/toDo';
import uuid from 'react-native-uuid';
import type {CreateToDoValidationErrors} from '../interfaces/validations';

interface UseCreateToDoProps {
  onCreate: (todo: Todo) => Promise<void>;
  onRequestClose: () => void;
}

export default function useCreateToDo({
  onCreate,
  onRequestClose,
}: UseCreateToDoProps) {
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(
    ToDoCategory.personal,
  );
  const [errors, setErrors] = React.useState<CreateToDoValidationErrors>({
    title: null,
    description: null,
    category: null,
  });

  React.useEffect(() => {
    setErrors(prev => ({...prev, title: null}));
  }, [title]);

  const handleCreate = async () => {
    if (title === '') {
      setErrors(prev => ({...prev, title: 'El título es obligatorio'}));
      return;
    }
    const newTodo: Todo = {
      id: uuid.v4() as string,
      title,
      description,
      category: selectedCategory,
      completed: false,
    };
    setLoading(true);
    await onCreate(newTodo);
    setLoading(false);
    setTitle('');
    setDescription('');
    setSelectedCategory(ToDoCategory.personal);
    onRequestClose();
  };

  return {
    loading,
    title,
    setTitle,
    description,
    setDescription,
    selectedCategory,
    setSelectedCategory,
    errors,
    setErrors,
    handleCreate,
  };
}
