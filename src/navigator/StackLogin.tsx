import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { DrawerNavigation } from './DrawerNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducers';
import { AboutScreen } from '../screens/AboutScreen';

const Stack = createStackNavigator();

export const StackLogin = () => {

  const auth = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {
          auth.isLoggedIn === true ? <Stack.Screen name="main" component={DrawerNavigation} /> :
          <Stack.Screen name="login" component={LoginScreen} />
      }
      
    </Stack.Navigator>
  );
}