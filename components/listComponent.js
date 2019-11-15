import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native'

const TodoList = props => {

    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={props.deleteTodo.bind(this, props.itemKey)}>
            
            <View style={styles.cardStyle}>
                <Text style={styles.textTitle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 10,
        marginTop: 12,
        backgroundColor: '#ffa333',
        borderRadius: 5
    }, 
    textTitle:{
        color: "white",
        fontWeight: "300",
        fontSize: 16
    }
})

export default TodoList