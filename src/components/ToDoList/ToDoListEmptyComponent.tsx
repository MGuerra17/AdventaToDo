import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {ToDoListStyles} from './toDoListStyles';
import {theme} from '../../constants/theme';

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
      {loading && (
        <ActivityIndicator
          size="large"
          color={theme.colors.accent}
          style={ToDoListStyles.spinner}
        />
      )}
    </View>
  );
}
