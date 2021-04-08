import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardItem extends Component {
    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginTop: 10,
        padding: 5,
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})