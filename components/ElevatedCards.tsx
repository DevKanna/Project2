import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View >
            <Text style={styles.headerText}>Elevated Cards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardElevated1]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated2]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated3]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated4]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated5]}>
                    <Text>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated6]}>
                    <Text>😘😘😘</Text>
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        padding:8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:4,
        width: 100,
        height: 100,



    },
    cardElevated1: {
        backgroundColor: 'yellow',
        elevation:4,
        shadowOffset:{
            width: 1,
            height:1
        },
        shadowColor: 'red',
        shadowOpacity: 0.5,
        shadowRadius: 2,

    },
    cardElevated2: {
        backgroundColor: 'red',
    },
    cardElevated3: {
        backgroundColor: 'green',
    },
    cardElevated4: {
        backgroundColor: 'grey',
    },
    cardElevated5: {
        backgroundColor: 'blue',
    },
    cardElevated6: {
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'black'
    },
})