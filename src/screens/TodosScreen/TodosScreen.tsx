import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from '../../components/Header/Header';
import ToDoList from '../../components/ToDoList/ToDoList';
import {todosScreenStyles} from './todosScreenStyles';

export default function TodosScreen() {
  return (
    <SafeAreaView style={todosScreenStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header title="Mis tareas" />
      <ToDoList />
    </SafeAreaView>
  );
}
