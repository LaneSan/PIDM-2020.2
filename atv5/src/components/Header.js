import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.props.title}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        height: 60,
        backgroundColor: '#f2f2f2',
        elevation: 10,  
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})