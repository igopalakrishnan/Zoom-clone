import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const StartMeeting = ({ name, roomId, setName, setRoomId, joinRoom }) => {
    return (
        <View style={styles.startMeetingContainer}>
            <View style={styles.info}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    placeholder="Enter Name"
                    placeholderTextColor="#767476"
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.info}>
                <TextInput
                    style={styles.textInput}
                    value={roomId}
                    placeholder="Enter Room Id"
                    placeholderTextColor="#767476"
                    onChangeText={text => setRoomId(text)}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => joinRoom()}
                    style={styles.startMeetingButton}>

                    <Text style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}>Start Meeting</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        justifyContent: "center",
    },
    textInput: {
        color: "white",
        fontSize: 18,
    },
    startMeetingButton: {
        width: 350,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0478DC",
        height: 50,
        borderRadius: 15,
    }
})
