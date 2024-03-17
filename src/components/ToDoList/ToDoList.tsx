import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {ToDoListStyles} from './toDoListStyles';
import ToDoListEmptyComponent from './ToDoListEmptyComponent';
import ToDoItem from './ToDoItem/ToDoItem';
import DeleteToDoModal from '../Modals/DeleteToDoModal/DeleteToDoModal';
import AddToDoButton from '../Buttons/AddToDoButton/AddToDoButton';
import useToDo from '../../hooks/useToDo';

export default function ToDoList() {
  const {
    todos,
    loading,
    deleteTodoId,
    setDeleteTodoId,
    handleNewTodo,
    handleToggleComplete,
    handleDelete,
  } = useToDo();

  return (
    <View style={ToDoListStyles.container}>
      <Text style={ToDoListStyles.title}>Listado</Text>
      <FlatList
        style={ToDoListStyles.taskList}
        data={todos}
        contentContainerStyle={ToDoListStyles.taskListContainer}
        renderItem={({item}) => (
          <ToDoItem
            data={item}
            onToggleComplete={handleToggleComplete}
            onDelete={() => setDeleteTodoId(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => <ToDoListEmptyComponent loading={loading} />}
      />
      <AddToDoButton onCreate={handleNewTodo} />
      <DeleteToDoModal
        visible={deleteTodoId != null}
        onRequestClose={() => setDeleteTodoId(null)}
        onDelete={() => (deleteTodoId ? handleDelete(deleteTodoId) : null)}
      />
    </View>
  );
}
