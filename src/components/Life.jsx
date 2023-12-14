import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RestartLife from './RestartLife'


const Life = () => {
    const [lifePlayerOne, setLifePlayerOne] = useState(20)
    const [lifePlayerTwo, setLifePlayerTwo] = useState(20)
    const lifeChangeHandler = (player, operator) => {
        if (player === "player one") {
            if (operator === "+") {
                setLifePlayerOne(lifePlayerOne + 1)
            } else {
                setLifePlayerOne((lifePlayerOne - 1))
            }
        } else {
            if (operator === "+") {
                setLifePlayerTwo(lifePlayerTwo + 1)
            } else {
                setLifePlayerTwo((lifePlayerTwo - 1))
            }
        }
    }

    const resetLifeHandler = () => {
        setLifePlayerOne(20)
        setLifePlayerTwo(20)
    }
    return (
        <>
            <View style={styles.conteiner}>
                <View style={styles.lifeConteiner}>
                    <Pressable onPress={() => lifeChangeHandler("player one", "-")} style={styles.button}>
                        <Text style={styles.operators}>-</Text>
                    </Pressable>
                    <Text style={styles.lifeNumber}>{lifePlayerOne}</Text>
                    <Pressable onPress={() => lifeChangeHandler("player one", "+")} style={styles.button}>
                        <Text style={styles.operators}>+</Text>
                    </Pressable>
                </View>
            </View>
            <RestartLife resetLifeHandlerEvent={resetLifeHandler} />
            <View style={styles.conteiner}>
                <View style={styles.lifeConteiner}>
                    <Pressable onPress={() => lifeChangeHandler("player two", "-")} style={styles.button}>
                        <Text style={styles.operators}>-</Text>
                    </Pressable>
                    <Text style={styles.lifeNumber}>{lifePlayerTwo}</Text>
                    <Pressable onPress={() => lifeChangeHandler("player two", "+")} style={styles.button}>
                        <Text style={styles.operators}>+</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default Life

const styles = StyleSheet.create({
    conteiner: {
        justifyContent: "center",
        alignItems: "center",
        height: "45%",
        width: "100%",
        backgroundColor: "red",
    },
    lifeConteiner: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15
    },
    button: {
        backgroundColor: "yellow",
        width: 70,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: {
            width: 13,
            height: 15,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderWidth: 0.5,
    },
    operators: {
        fontSize: 30
    },
    lifeNumber: {
        fontSize: 100
    }
})