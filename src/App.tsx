/**
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import DeadlinesScreen from './screens/DeadlinesScreen';
import HouseholdScreen from './screens/HouseHoldScreen';
import SettingsScreen from './screens/SettingsScreen';
import ToDosScreen from './screens/ToDosScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import { RootStackParamList } from './types/RootStackParamList';
import theme from './themes/DefaultTheme';
import { AppBar } from './components/AppBar';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        initialRouteName="ToDos"
        screenOptions={{ header: (props: any) => <AppBar {...props} /> }}>
        <RootStack.Screen
          name="Deadlines"
          component={DeadlinesScreen}
          options={{ headerTitle: 'Deadlines' }}
        />
        <RootStack.Screen
          name="HouseHold"
          component={HouseholdScreen}
          options={{ headerTitle: 'Households' }}
        />
        <RootStack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerTitle: 'Settings' }}
        />
        <RootStack.Screen name="ToDos" component={ToDosScreen} options={{ headerTitle: 'ToDos' }} />
        <RootStack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ headerTitle: 'Households' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;
