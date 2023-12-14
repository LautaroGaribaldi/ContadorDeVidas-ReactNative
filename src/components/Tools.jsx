import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tools = () => {
    return (
        <View style={styles.toolsConteiner}>
            <Text>Tools</Text>
        </View>
    )
}

export default Tools

const styles = StyleSheet.create({
    toolsConteiner: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
    }
})