import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Screens/Home';
import Add from '../Screens/Add';
import Edit from '../Screens/Edit';

const Main = createStackNavigator();
const Root = createStackNavigator();

const MainScreen = () => {
    return (

        <Main.Navigator>
            <Main.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Main.Screen name='Add' component={Add} options={{headerShown:false}}/>
            <Main.Screen name='Edit' component={Edit} options={{headerShown:false}}/>
        </Main.Navigator>

    )
}

const Routes = () => (
    <NavigationContainer>
        <Root.Navigator>
            <Root.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
        </Root.Navigator>
    </NavigationContainer>
)

export default Routes;

