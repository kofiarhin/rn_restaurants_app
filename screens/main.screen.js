import React from 'react';
import {landingBg} from '../constants';
import {AuthBackground, AuthButton} from '../components/Auth/auth.styles';
import {SpacerBottom} from '../constants';
import {Text, StyleSheet} from 'react-native';

export const Main = ({navigation}) => {
  return (
    <AuthBackground>
      {/* title */}
      <Text style={styles.title}> Uber Eats </Text>

      <AuthButton
        icon="lock-open-outline"
        onPress={() => navigation.navigate('Login')}>
        {' '}
        Login
      </AuthButton>
      <SpacerBottom />
      <AuthButton icon="email" onPress={() => navigation.navigate('Register')}>
        {' '}
        Register
      </AuthButton>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'Tajawal-Bold',
    marginBottom: 20,
  },
});
