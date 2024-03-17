import React from 'react';
import {View} from 'react-native';
import {Todo} from '../../../interfaces/toDo';
import CompleteToggler from './CompleteToggler';
import DeleteTodoButton from './DeleteButton';
import {ToDoItemStyles} from './ToDoItemStyle';
import Details from './Details';

interface TodoItemProps {
  data: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ToDoItem({
  data,
  onToggleComplete,
  onDelete,
}: TodoItemProps) {
  return (
    <View style={ToDoItemStyles.container}>
      <CompleteToggler
        itemId={data.id}
        completed={data.completed}
        onToggle={onToggleComplete}
      />
      <Details data={data} />
      <DeleteTodoButton itemId={data.id} onDelete={onDelete} />
    </View>
  );
}
