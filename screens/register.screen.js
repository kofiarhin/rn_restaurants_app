import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  AuthBackground,
  AuthButton,
  AuthInput,
  AuthCover,
} from '../components/Auth/auth.styles';
import {Title, SpacerBottom, DefaultText} from '../constants';

export const Register = ({navigation}) => {
  return (
    <AuthBackground>
      <AuthCover>
        <Title> Register </Title>
        <AuthInput label="Email" />
        <AuthInput label="Password" secureText />
        <SpacerBottom />
        <AuthButton onPress={() => navigation.navigate('Login')}>
          {' '}
          Register
        </AuthButton>
        <SpacerBottom />
        <DefaultText>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text> Login </Text>
          </TouchableOpacity>{' '}
        </DefaultText>
      </AuthCover>
    </AuthBackground>
  );
};
