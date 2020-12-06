import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Disciplina extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.disciplina}</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('atv1', () => Disciplina);