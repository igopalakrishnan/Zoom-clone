import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Room" component={MeetingRoom}
                options={{
                    title: "Start a Meeting",
                    headerStyle: {
                        backgroundColor: "#1c1c1c",
                        shadowOpacity: 0,
                    },
                    headerTintColor: "white",
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
