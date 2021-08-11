import React from 'react';
import {landingBg} from '../constants';
import {AuthBackground, AuthButton} from '../components/Auth/auth.styles';
import {SpacerBottom} from '../constants';

export const Main = ({navigation}) => {
  return (
    <AuthBackground>
      <AuthButton
        icon="lock-open-outline"
        onPress={() => navigation.navigate('Login')}>
        {' '}
        Login
      </AuthButton>
      <SpacerBottom />
      <AuthButton
        icon="lock-open-outline"
        onPress={() => navigation.navigate('Register')}>
        {' '}
        Register
      </AuthButton>
    </AuthBackground>
  );
};
