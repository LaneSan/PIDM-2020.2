import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Modal from '../screens/Modal';

const Main = createStackNavigator()
const Root = createStackNavigator()

function MainStackScreens() {
    return(
        <Main.Navigator>
            <Main.Screen 
                name = 'Home'
                component = {Home}
                options = {{headerShown:false}}
            />
        </Main.Navigator>
    )
}

export default function RootStackScreens() {
    return(
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen
                    name = 'MainStackScreens'
                    component = {MainStackScreens}
                    options = {{headerShown:false}} 
                />
                <Root.Screen 
                    name = 'Modal'
                    component = {Modal}
                    options = {{headerShown:false}}
                />
            </Root.Navigator>
        </NavigationContainer>
    )
}