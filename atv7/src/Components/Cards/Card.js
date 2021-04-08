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
        flex: 1,
        width: '100%',
        marginBottom: 5, 
        padding: 5,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignContent: 'center',
        
    }
})