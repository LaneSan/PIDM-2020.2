import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Modal extends Component {
    reder() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 30 }}>Isso é um modal</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title='Sair'
                />
            </View>
        )
    }
}