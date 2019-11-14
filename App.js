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
      <View style={{ marginTop: 20 }}></View>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={Todos}
        renderItem={itemData =>
          <TodoList
            title={itemData.item.value}
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
});
