import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  AuthBackground,
  AuthButton,
  AuthCover,
  AuthInput,
} from '../components/Auth/auth.styles';
import {AuthContext} from '../context/Auth/auth.context';
import {TextInput} from 'react-native-paper';
import {Title, DefaultText, SpacerBottom} from '../constants';

export const Login = ({navigation}) => {
  const {isAuth, onLogin} = useContext(AuthContext);

  return (
    <AuthBackground>
      <AuthCover>
        <Title> Login </Title>
        <SpacerBottom />
        <AuthInput label="Email" />
        <AuthInput label="Password" secureTextEntry />
        <SpacerBottom />
        <AuthButton onPress={() => onLogin()}> Login</AuthButton>
        <SpacerBottom />
        <DefaultText>
          Don't have an account ?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text> Register </Text>
          </TouchableOpacity>{' '}
        </DefaultText>
      </AuthCover>
    </AuthBackground>
  );
};
