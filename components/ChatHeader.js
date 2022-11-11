import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const ChatHeader = ({ setModalVisible }) => {
    return (
        <View style={styles.container}>
            <Entypo name="bell" size={25} color="#efefef" />
            <Text style={styles.heading}>Chat</Text>
            <Pressable
            onPress={()=>setModalVisible(false)}
            >
                <Text style={styles.buttonText}>Close</Text>
            </Pressable>
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: { 
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    heading: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    }
})
