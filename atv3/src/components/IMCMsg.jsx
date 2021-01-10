import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class IMCMsg extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        const {imc} = this.props

        if(!imc) return null;
        if(imc < 17) return (<Text style = {styles.msgRed}>Muito abaixo do peso</Text>);
        if(imc >= 17 && imc <= 18.49) return (<Text style = {styles.msgRed}>Abaixo do peso</Text>);
        if(imc >= 18.50 && imc <= 24.99) return (<Text style = {styles.msgBlue}>Peso normal</Text>);
        if(imc >= 25 && imc <= 29.99) return (<Text style = {styles.msgRed}>Acima do peso</Text>);
        if(imc >= 30 && imc <= 34.99) return (<Text style = {styles.msgRed}>Obesidade</Text>);
        if(imc >= 35 && imc <= 39.99) return (<Text style = {styles.msgRed}>Obesidade mórbida</Text>);
        if(imc > 40) return (<Text style = {styles.msgRed}>Obesidade severa</Text>);

    }
}

const styles = StyleSheet.create({
    msgRed: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'red'
    },
    msgBlue: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue'
    }
});