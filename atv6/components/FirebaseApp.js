import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import firestore from '@react-native-firebase/firestore';

export default class FirebaseApp extends Component {

    constructor(props){
        super(props)
        this.getUser()
        this.state = {nome:''}
    }

    getUser = async () => {
        const userDocument = await firestore().collection('users')
        .doc('EC45lyuDgOzFskXNZKcH').get()
        this.setState({nome:userDocument._data.nome})
    }

    render() {
        return (
            <View style={styles.container}>
              {this.state.nome}
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
