import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react'
import { Alert, Modal, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { io } from 'socket.io-client';
import StartMeeting from '../components/StartMeeting';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Chat from '../components/Chat';

let socket;

const menuIcons = [
    {
        id: 1,
        name: "microphone",
        title: "Mute",
        customColor: "#efefef",
    },
    {
        id: 2,
        name: "video-camera",
        title: "Stop Video",
    },
    {
        id: 3,
        name: "upload",
        title: "Share Content",
    },
    {
        id: 4,
        name: "group",
        title: "Participate",
    },
]

const MeetingRoom = () => {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [startCamera, setStartCamera] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    


    const __startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === "granted") {
            setStartCamera(true);
        } else {
            Alert.alert("Access denied");
        }
    }


    const joinRoom = () => {
        __startCamera();
        socket.emit("join-room", { roomId: roomId, userName: name })
    }

    useEffect(() => {
        socket = io("https://dynamic-parfait-2be253.netlify.app/");
        socket.on("connection", () => console.log("connected"))
        socket.on("all-users", users => {
            console.log(users, "After clean up")
            setActiveUsers(users)
        })
    }, [])

    return (
        <View style={styles.container}>
            {startCamera ? (
                <SafeAreaView style={{ flex: 1 }}>

                    <Modal
                    animationType="slide"
                    transparent={false}
                    presentationStyle={"fullScreen"}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                    >
                        <Chat 
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        />

                    </Modal>
                    <View style={styles.activeUsersContainer}>

                        <View style={styles.cameraContainer}>
                            <Camera
                                type={"front"}
                                style={{
                                    width: activeUsers.length <= 1 ? "100%" : 200,
                                    height: activeUsers.length <= 1 ? 600 : 200
                                }}
                            >

                            </Camera>
                            {activeUsers.filter(user => (user.userName != name)).map((user, index) =>
                                <View key={index} style={styles.activeUserContainer}>
                                    <Text style={{ color: "white" }}>{user.userName}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={styles.menu}>
                        {menuIcons.map((icon, index) =>
                            <TouchableOpacity
                                key={index}
                                style={styles.tile}
                            >
                                <FontAwesome name={icon.name} size={24} color={"#efefef"} />
                                <Text style={styles.textTile}>{icon.title}</Text>
                            </TouchableOpacity>
                        )}
                         <TouchableOpacity
                         onPress={() => setModalVisible(true)}
                                style={styles.tile}
                            >
                                <FontAwesome name={"comment"} size={24} color={"#efefef"} />
                                <Text style={styles.textTile}>Chat</Text>
                            </TouchableOpacity>
                    </View>
                </SafeAreaView>
            ) : (
                <StartMeeting
                    name={name}
                    setName={setName}
                    roomId={roomId}
                    setRoomId={setRoomId}
                    joinRoom={joinRoom}
                />
            )}

        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    },
    tile: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 15,
    },
    textTile: {
        color: "white",
        marginTop: 10,
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cameraContainer: {
        justifyContent: "center",
        flexDirection: Platform.OS === "android" ? "column" : "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    activeUserContainer: {
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    activeUsersContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    }
})
