import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


export default class Card extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5, 
        padding: 5, 
        borderColor: '#f2f2f2', 
        borderWidth: 2
    }
})