import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, FlatList } from 'react-native';

import TodoInput from './components/inputComponent'
import TodoList from './components/listComponent'

export default function App() {

  const [Todos, setTodos] = useState([])
  const [ModalInput, setModalInput] = useState(false)

  const addTodo = todo => {
    setTodos(currentTodos => [
      ...currentTodos,
      { key: Math.random().toString(), value: todo }
    ])
    setModalInput(false)
  }

  const removeTodo = todoKey => {
    setTodos(currentTodos => {
      return currentTodos.filter((todo) => todo.key != todoKey)
    })
  }

  const closeModal = () => {
    setModalInput(false)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.headerText}> Todo List App</Text>

      <Button color="#ffa333" onPress={() => 
        setModalInput(true)} 
        title="Tambah ToDo" 
      />

      <TodoInput
        visible={ModalInput}
        AddData={addTodo}
        closeModal={closeModal}
      />
      <View style={{ marginTop: 20 }}></View>
      <Text style={styles.bodyText}> List Todo Anda :</Text>
     
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={Todos}
        renderItem={itemData =>
          <TodoList
            itemKey={itemData.item.key}
            title={itemData.item.value}
            deleteTodo={removeTodo}
          />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 50
  },
  headerText: {
    fontSize: 25,
    fontWeight: "600",
    color: 'black',
    marginBottom: 20
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "600",
    color: 'black',
    marginTop: 20
  },
});
