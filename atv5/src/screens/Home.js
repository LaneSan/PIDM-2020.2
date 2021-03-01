import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import AlbumList from '../components/AlbumList';

export default class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={ styles.container }>
                <Header title='Álbuns' />
                <AlbumList {...this.props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
