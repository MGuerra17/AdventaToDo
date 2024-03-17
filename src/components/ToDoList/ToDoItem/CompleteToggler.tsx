import React from 'react';
import {Pressable, View} from 'react-native';
import CheckIcon from '../../Icons/CheckIcon';
import {ToDoItemStyles, getTogglerStyle} from './ToDoItemStyle';

interface CompletedToggleProps {
  completed: boolean;
  itemId: string;
  onToggle: (id: string) => void;
}

export default function CompleteToggler({
  completed,
  itemId,
  onToggle,
}: CompletedToggleProps) {
  const togglerStyle = getTogglerStyle(completed);

  return (
    <Pressable
      style={ToDoItemStyles.togglerButton}
      onPress={() => onToggle(itemId)}>
      <View style={[ToDoItemStyles.togglerView, togglerStyle]}>
        {completed && (
          <CheckIcon
            width={15}
            height={15}
            styles={ToDoItemStyles.togglerIcon}
          />
        )}
      </View>
    </Pressable>
  );
}
