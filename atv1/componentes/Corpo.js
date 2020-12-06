import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class Corpo extends Component {
    render() {
        return (
            <View>
                <Image source={require('../assets/shel.png')} style={{width:100, height: 100}}/>
            </View>
        );
    }
}
AppRegistry.registerComponent('atv1', () => Corpo);