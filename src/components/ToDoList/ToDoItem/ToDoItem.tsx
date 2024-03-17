import React from 'react';
import {View} from 'react-native';
import {Todo} from '../../../interfaces/toDo';
import CompleteToggler from './CompleteToggler';
import DeleteTodoButton from './DeleteButton';
import {ToDoItemStyles} from './ToDoItemStyle';
import Details from './Details';

interface TodoItemProps {
  data: Todo;
  loading: boolean;
  toggledTodoId: string | null;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ToDoItem({
  data,
  loading,
  toggledTodoId,
  onToggleComplete,
  onDelete,
}: TodoItemProps) {
  const isLoading = loading && toggledTodoId === data.id;
  return (
    <View
      style={[
        ToDoItemStyles.container,
        isLoading && ToDoItemStyles.loadingContainer,
      ]}>
      <CompleteToggler
        itemId={data.id}
        completed={data.completed}
        onToggle={onToggleComplete}
        disabled={isLoading}
      />
      <Details data={data} />
      <DeleteTodoButton
        itemId={data.id}
        onDelete={onDelete}
        disabled={isLoading}
      />
    </View>
  );
}
