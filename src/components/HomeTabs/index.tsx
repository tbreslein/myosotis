import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ToDosScreen from '../../screens/ToDosScreen';
import DeadlinesScreen from '../../screens/DeadlinesScreen';
import HouseholdScreen from '../../screens/HouseHoldScreen';
import UserProfileScreen from '../../screens/UserProfileScreen';

const Tab = createMaterialBottomTabNavigator();

// NOTE:: check https://reactnavigation.org/docs/material-bottom-tab-navigator#using-with-react-native-paper-optional
// for styling examples

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ToDos"
        component={ToDosScreen}
        options={{
          tabBarLabel: 'ToDos',
          tabBarIcon: () => <MaterialCommunityIcons name="format-list-checks" size={26} />,
        }}
      />
      <Tab.Screen
        name="Deadlines"
        component={DeadlinesScreen}
        options={{
          tabBarLabel: 'Deadlines',
          tabBarIcon: () => <MaterialCommunityIcons name="alarm" size={26} />,
        }}
      />
      <Tab.Screen
        name="Household"
        component={HouseholdScreen}
        options={{
          tabBarLabel: 'Household',
          tabBarIcon: () => <MaterialCommunityIcons name="home-variant-outline" size={26} />,
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
