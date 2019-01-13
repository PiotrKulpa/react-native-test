import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
//screens
import Home from '../screens/HomeScreen';
import Links from '../screens/LinksScreen';

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Home: {
    screen: Home
  },
  Links: {
    screen: Links
  }
}));
