import {Todo} from '../interfaces/toDo';

const API_BASE_URL = 'https://todo-server-y00c.onrender.com';

export const todoApi = {
  get: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`);
      const data = await response.json();
      const todos: Todo[] = data.map((todo: any) => ({
        id: todo.id,
        title: todo.title,
        description: todo.description,
        category: todo.category,
        completed: todo.completed,
      }));
      return {error: null, data: todos};
    } catch (error) {
      return {error: 'Error fetching todos', data: null};
    }
  },
  create: async (todo: Todo) => {
    try {
      await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      return {error: null, data: todo};
    } catch (error) {
      return {error: 'Error creating todo', data: null};
    }
  },
  update: async (todo: Todo) => {
    try {
      await fetch(`${API_BASE_URL}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      return {error: null, data: todo};
    } catch (error) {
      return {error: 'Error updating todo', data: null};
    }
  },
  delete: async (id: string) => {
    try {
      await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE',
      });
      return {error: null, data: {id}};
    } catch (error) {
      return {error: 'Error deleting todo', data: null};
    }
  },
};
