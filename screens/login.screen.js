import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {
  AuthBackground,
  AuthButton,
  AuthCover,
} from '../components/Auth/auth.styles';
import {AuthContext} from '../context/Auth/auth.context';
import {SpacerBottom} from '../constants';

export const Login = ({navigation}) => {
  const {isAuth, onLogin} = useContext(AuthContext);

  return (
    <AuthBackground>
      <AuthCover>
        <AuthButton onPress={() => onLogin()}> Login</AuthButton>
        <SpacerBottom />
        <AuthButton onPress={() => navigation.goBack()}> Go Back</AuthButton>
      </AuthCover>
    </AuthBackground>
  );
};
