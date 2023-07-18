import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in Javascript</Text>
                </View>
                <Image source={{
                    uri: 'data:image/jpeg;base64,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'
                }} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>
                        Just like every year, Javascript brings in new features. This year
                        javascript is bringing 4 new features, which are almost in
                        production rollout. I won't be wasting much more time and directly
                        jump to code with easy to understand examples.
                    </Text>
                </View>

                <View style={styles.footerContainer} >
                    <TouchableOpacity
                        onPress={() => openWebsite('http://61.95.183.12:8080/merdazz')}
                    >
                        <Text style={styles.socialLinks} >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('http://61.95.183.12:8080/merdazz')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 380,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: 'pink',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6

    }
})