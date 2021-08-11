import React from 'react';
import {View, Text} from 'react-native';
import {AuthBackground, AuthButton} from '../components/Auth/auth.styles';

export const Register = ({navigation}) => {
  return (
    <AuthBackground>
      <AuthButton onPress={() => navigation.goBack()}> Go Back</AuthButton>
    </AuthBackground>
  );
};
