import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen name="home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}