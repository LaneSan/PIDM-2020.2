import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/routes/Routes';

export default () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  )
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
