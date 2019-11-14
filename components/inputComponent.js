import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const TodoInput = props => {
    const [inputTodo, setinputTodo] = useState('')
    const inputTodoHandler = (inputTodo) => {
        setinputTodo(inputTodo)
    }
    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Input Data"
                    style={styles.inputStyle}
                    onChangeText={inputTodoHandler}
                    value={inputTodo}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button
                            onPress={props.AddData.bind(this, inputTodo)}
                            title="Tambah Data"
                        />
                    </View>
                    <View style={{ marginRight: 10 }}></View>
                    <View style={styles.buttonStyle}>
                        <Button
                            style={styles.buttonStyle}
                            color="red"
                            title="Batal"
                            onPress={props.closeModal}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    inputStyle: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
    },

    buttonStyle: {
        flex: 1,
        justifyContent: 'space-between',
    }


})

export default TodoInput