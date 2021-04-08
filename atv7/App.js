import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/Routes';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
        <Routes />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center'
  },
})
