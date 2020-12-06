import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Cabecalho extends Component {
    render() {
        return (
            <View>
                <Text><Text style={{fontWeight: 'bold'}}>Aluno:</Text> {this.props.nome}</Text>
                <Text><Text style={{fontWeight: 'bold'}}>Curso:</Text> {this.props.curso}</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('atv1', () => Cabecalho);