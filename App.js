import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import TodoInput from './components/inputComponent'

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

  const closeModal = () => {
    setModalInput(false)
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => 
        setModalInput(true)} 
        title="Tambah Data" 
      />

      <TodoInput
        visible={ModalInput}
        AddData={addTodo}
        closeModal={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 50
  },
});
