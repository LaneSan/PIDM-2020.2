import Home from './Home';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import IMC from './IMC';
import Perfil from './Perfil';
import Resultado from './Resultado';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Modal } from 'react-native';

const PilhaPrincipal = createStackNavigator()
const PilhaRaiz = createStackNavigator()

function PilhaPrincipalTelas() {
    return(
        <PilhaPrincipal.Navigator>
            <PilhaPrincipal.Screen name='Home' component={Home}/>
            <PilhaPrincipal.Screen name='Cadastro' component={Cadastro}/>
            <PilhaPrincipal.Screen name='Perfil' component={Perfil}/>
            <PilhaPrincipal.Screen name='IMC' component={IMC}/>
            <PilhaPrincipal.Screen name='Resultado' component={Resultado}/>
            <PilhaPrincipal.Screen name='Sobre' component={Sobre}/>
        </PilhaPrincipal.Navigator>
    )
}

function PilhaRaizTelas() {
    return(
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen name='Principal' component={PilhaPrincipalTelas} options={{ headerShown: false }}/>
                <PilhaRaiz.Screen name='Modal' component={Modal}/>
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default PilhaRaizTelas

/*function Routes(){
    return(
        <NavigationContainer>
            <Pilha.Navigator initialRouteName='Home'>
                <Pilha.Screen
                    name='Home'
                    component={Home}
                />
                <Pilha.Screen
                    name='Cadastro'
                    component={Cadastro}
                />
                <Pilha.Screen
                    name='Perfil'
                    component={Perfil}
                />
                <Pilha.Screen
                    name='IMC'
                    component={IMC}
                />
                <Pilha.Screen
                    name='Resultado'
                    component={Resultado}
                />
                <Pilha.Screen
                    name='Sobre'
                    component={Sobre}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Routes;*/