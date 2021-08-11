import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  AuthBackground,
  AuthButton,
  AuthCover,
  AuthInput,
} from '../components/Auth/auth.styles';
import {AuthContext} from '../context/Auth/auth.context';
import {SpacerBottom} from '../constants';
import {TextInput} from 'react-native-paper';
import {Title, DefaultText} from '../constants';

export const Login = ({navigation}) => {
  const {isAuth, onLogin} = useContext(AuthContext);

  return (
    <AuthBackground>
      <AuthCover>
        <Title> Login </Title>
        <AuthInput label="Email" />
        <AuthInput label="Password" secureText />
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
