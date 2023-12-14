import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const RestartLife = ({ resetLifeHandlerEvent }) => {
    return (
        <View style={styles.conteiner}>
            <TouchableOpacity style={styles.conteinerRestart} onLongPress={() => resetLifeHandlerEvent()}>
                <Ionicons name="ios-reload-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default RestartLife

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 3,
        borderTopWidth: 3
    },
    conteinerRestart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
    }
})