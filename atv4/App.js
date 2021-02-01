import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './scr/components/Routes';

export default class App extends Component {
  render(){
    return (
      <SafeAreaProvider /*style={styles.container}*/>
        <Routes />
      </SafeAreaProvider>
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
