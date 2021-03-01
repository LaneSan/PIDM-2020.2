import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.buttonStyle, this.props.style]}
                onPress={this.props.onPress}
            >
                <Text style={styles.textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        margin: 5,
        elevation: 3
    },
    textStyle: {
        alignSelf: 'center',
        color: 'blue',
        fontSize: 16,
        fontWeight:'bold',
        paddingTop: 10,
        paddingBottom: 10

    }
});