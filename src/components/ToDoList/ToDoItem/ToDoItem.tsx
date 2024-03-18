import React from 'react';
import {View} from 'react-native';
import {Todo} from '../../../interfaces/toDo';
import CompleteToggler from './CompleteToggler';
import DeleteTodoButton from './DeleteButton';
import {ToDoItemStyles} from './ToDoItemStyle';
import Details from './Details';

interface TodoItemProps {
  data: Todo;
  onToggleComplete: (id: string) => Promise<void>;
  onDelete: (id: string) => void;
}

export default function ToDoItem({
  data,
  onToggleComplete,
  onDelete,
}: TodoItemProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleToggleComplete = async () => {
    setIsLoading(true);
    await onToggleComplete(data.id);
    setIsLoading(false);
  };

  return (
    <View
      style={[
        ToDoItemStyles.container,
        isLoading && ToDoItemStyles.loadingContainer,
      ]}>
      <CompleteToggler
        completed={data.completed}
        onToggle={handleToggleComplete}
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
