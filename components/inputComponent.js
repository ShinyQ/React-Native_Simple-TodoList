import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'

const TodoInput = props => {
    const [inputTodo, setinputTodo] = useState('')
    const inputTodoHandler = (inputTodo) => {
        setinputTodo(inputTodo)
    }
    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Text style={styles.headerText}> Tambahkan Todo</Text>

                <TextInput
                    placeholder="Tambahkan Todo"
                    style={styles.inputStyle}
                    onChangeText={inputTodoHandler}
                    value={inputTodo}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button
                            color="#ffa333"
                            onPress={props.AddData.bind(this, inputTodo)}
                            title="Tambah Data"
                        />
                    </View>
                    <View style={{ marginRight: 10 }}></View>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity
                            style={styles.buttonCancel}
                            onPress={props.closeModal}
                        >
                            <Text style={styles.textBatal}>BATAL</Text>
                        </TouchableOpacity>
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
    headerText: {
        fontSize: 25,
        fontWeight: "600",
        color: 'black',
        marginBottom: 20
    },
    inputStyle: {
        width: '80%',
        borderColor: '#ffa333',
        borderWidth: 2,
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
    },
    buttonCancel: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 6,
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 2,
        elevation: 5
    },
    textBatal:{
        fontWeight: "600",
        color: "red"
    }



})

export default TodoInput