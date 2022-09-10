/**
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import SettingsScreen from './screens/SettingsScreen';
import { RootStackParamList } from './types/RootStackParamList';
import theme from './themes/DefaultTheme';
import { AppBar } from './components/AppBar';
import HomeTabs from './components/HomeTabs';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{ header: (props: any) => <AppBar {...props} /> }}>
        <RootStack.Screen name="Home" component={HomeTabs} options={{ headerTitle: 'Home' }} />
        <RootStack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerTitle: 'Settings' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;
