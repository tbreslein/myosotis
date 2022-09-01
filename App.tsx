/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Appbar,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Text, View} from 'react-native';

const theme = {
  ...DefaultTheme,
  dark: true,
};

const Myotosis = () => (
  <View>
    <Appbar.Header>
      <Appbar.Content title="Myotosis" />
    </Appbar.Header>
    <Text>Hello, world!</Text>
  </View>
);

// other providers should go AROUND the PaperProvider
const App = () => (
  <PaperProvider theme={theme}>
    <Myotosis />
  </PaperProvider>
);

export default App;
