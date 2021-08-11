import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main, Login, Register} from '../screens';
import {AuthContextProvider} from '../context/Auth/auth.context';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Main" component={Main} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
