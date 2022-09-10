import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ToDosScreen from '../../screens/ToDosScreen';
import DeadlinesScreen from '../../screens/DeadlinesScreen';
import HouseholdScreen from '../../screens/HouseHoldScreen';
import UserProfileScreen from '../../screens/UserProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ToDos" component={ToDosScreen} />
      <Tab.Screen name="Deadlines" component={DeadlinesScreen} />
      <Tab.Screen name="Household" component={HouseholdScreen} />
      <Tab.Screen name="UserProfile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
