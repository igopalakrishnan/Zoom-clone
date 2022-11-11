import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import ContactsMenu from '../components/ContactsMenu';
import { StatusBar } from 'expo-status-bar';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
                <Header />
                <SearchBar />
                <MenuButtons navigation={navigation}/>
                <ContactsMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})
