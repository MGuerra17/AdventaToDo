import React from 'react';
import {Pressable} from 'react-native';
import TrashIcon from '../../Icons/TrashIcon';
import {ToDoItemStyles} from './ToDoItemStyle';

interface DeleteTodoButtonProps {
  itemId: string;
  onDelete?: (id: string) => void;
}

export default function DeleteTodoButton({
  itemId,
  onDelete,
}: DeleteTodoButtonProps) {
  return (
    <Pressable
      style={ToDoItemStyles.deleteButton}
      onPress={() => onDelete?.(itemId)}>
      <TrashIcon width={24} height={24} styles={ToDoItemStyles.deleteIcon} />
    </Pressable>
  );
}
