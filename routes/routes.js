import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app.navigator';
import AuthStackNavigator from './auth.navigator';
import {AuthContext} from '../context/Auth/auth.context';

const Routes = () => {
  const {isAuth} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStackNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Routes;
