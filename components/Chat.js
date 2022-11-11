import React, { useState } from 'react'
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform, SafeAreaView,
    StyleSheet, Text,
    TextInput, TouchableOpacity,
    TouchableWithoutFeedback, View
} from 'react-native'
import ChatHeader from './ChatHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Chat = ({ setModalVisible }) => {
    const [messageText, setMessageText] = useState();

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: "100%" }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : ""}
                    style={{ flex: 1 }}
                >
                    <ChatHeader setModalVisible={setModalVisible} />
                    <View style={styles.chatMessage}>

                    </View>
                    <View style={styles.chatFormContainer}>
                        <Text style={{ color: "white" }}>Send to Everyone</Text>
                        <View style={styles.chatForm}>
                            <TextInput
                                value={messageText}
                                onChangeText={text => setMessageText(text)}
                                style={styles.textInput}
                                placeholderTextColor="#595859"
                                placeholder="Tap here to Chat"
                            />
                            <TouchableOpacity
                                style={{
                                    ...styles.button,
                                    backgroundColor: messageText ? "#0B71EB" : "#373838"
                                }}
                            >
                                <FontAwesome name={"send"} size={18} color="#efefef" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c"
    },
    chatFormContainer: {
        borderColor: "#2f2f2f",
        borderTopWidth: 1,
        padding: 12,

    },
    textInput: {
        height: 40,
        color: "#efefef",
        borderColor: "#595859",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1
    },
    button: {
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        backgroundColor: "#373838",
        justifyContent: "center",
        alignItems: "center", borderRadius: 10,
    },
    chatForm: {
        flexDirection: "row",
    },
    chatMessage: {
        flex: 1,
    }
})
