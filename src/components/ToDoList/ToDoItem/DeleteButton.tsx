import React from 'react';
import {Pressable} from 'react-native';
import TrashIcon from '../../Icons/TrashIcon';
import {ToDoItemStyles} from './ToDoItemStyle';

interface DeleteTodoButtonProps {
  itemId: string;
  disabled?: boolean;
  onDelete?: (id: string) => void;
}

export default function DeleteTodoButton({
  itemId,
  disabled,
  onDelete,
}: DeleteTodoButtonProps) {
  return (
    <Pressable
      style={ToDoItemStyles.deleteButton}
      onPress={() => onDelete?.(itemId)}
      disabled={disabled}>
      <TrashIcon width={24} height={24} styles={ToDoItemStyles.deleteIcon} />
    </Pressable>
  );
}
