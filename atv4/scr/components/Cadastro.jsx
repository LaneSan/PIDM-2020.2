import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default class Cadastro extends Component {

    constructor(props){
        super(props)
        this.state={nome: null, idade: null, email: null}
    }

    render(){        
        return(
            <View>
               <TextInput
                style={styles.textInput}
                placeholder='Digite seu nome'
                onChangeText={nome => this.setState({nome})}
               />
               <TextInput
                style={styles.textInput}
                placeholder='Digite sua idade'
                onChangeText={idade => this.setState({idade})}
               />
               <TextInput
                style={styles.textInput}
                placeholder='Digite seu e-mail'
                onChangeText={email => this.setState({email})}
               />
               <View style={styles.viewButton}>
                    <Button 
                        title='OK'
                        onPress={() => this.props.navigation.navigate('Perfil', {
                            nome: this.state.nome,
                            idade: this.state.idade,
                            email: this.state.email,
                        })}
                    />
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20,
        margin: 10
        },
    viewButton: {
        width: "93%",
        margin: 15,
    }
});