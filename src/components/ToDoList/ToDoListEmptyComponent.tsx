import React from 'react';
import {Text, View} from 'react-native';
import {ToDoListStyles} from './toDoListStyles';

interface ToDoListEmptyComponentProps {
  loading: boolean;
}

export default function ToDoListEmptyComponent({
  loading,
}: ToDoListEmptyComponentProps) {
  return (
    <View style={ToDoListStyles.emptyListContainer}>
      <Text style={ToDoListStyles.emptyListText}>
        {loading ? 'Cargando tareas...' : 'No hay tareas aún'}
      </Text>
    </View>
  );
}
