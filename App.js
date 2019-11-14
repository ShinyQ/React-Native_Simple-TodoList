import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [Todos, setTodos] = useState([])
  const [ModalInput, setModalInput] = useState(false)

  const addTodo = todo => {
    setTodos(currentTodos => [
      ...currentTodos,
      { key: Math.random().toString(), value: todo }
    ])
    setIsAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => setModalInput(true)} title="Tambah Data" />

      <TodoInput
        visible={setModalInput}
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
