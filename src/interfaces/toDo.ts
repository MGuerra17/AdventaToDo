export interface Todo {
  id: string;
  title: string;
  description: string;
  category: ToDoCategory;
  completed: boolean;
}

export enum ToDoCategory {
  personal = 'Personal',
  work = 'Trabajo',
  study = 'Estudio',
  other = 'Otro',
}
