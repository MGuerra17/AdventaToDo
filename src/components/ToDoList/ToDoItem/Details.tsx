import React from 'react';
import {Text, View} from 'react-native';
import {Todo} from '../../../interfaces/toDo';
import {
  ToDoItemStyles,
  getTextInfoStyle,
  getToDoBadgeStyle,
} from './ToDoItemStyle';

export interface DetailsProps {
  data: Todo;
}

export default function Details({data}: DetailsProps) {
  const categoryStyle = getToDoBadgeStyle(data.category);
  const textStyle = getTextInfoStyle(data.completed);

  return (
    <View style={ToDoItemStyles.taskInfoContainer}>
      <Text style={[ToDoItemStyles.statusBadge, categoryStyle]}>
        {data.category}
      </Text>
      <Text style={[ToDoItemStyles.taskTitle, textStyle]}>{data.title}</Text>
      <Text style={[ToDoItemStyles.taskDescription, textStyle]}>
        {data.description === '' ? 'Sin descripción' : data.description}
      </Text>
    </View>
  );
}
