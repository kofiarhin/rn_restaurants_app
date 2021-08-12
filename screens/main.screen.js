import React from 'react';
import {AuthBackground, AuthButton} from '../components/Auth/auth.styles';
import {SpacerBottom} from '../constants';
import {Text, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export const Main = ({navigation}) => {
  return (
    <AuthBackground>
      <View
        style={{
          width: '100%',
          height: 150,
        }}>
        <LottieView
          animation="key"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../assets/watermelon.json')}
        />
      </View>

      <View>
        <Text style={styles.title}> Uber Eats </Text>

        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate('Login')}>
          {' '}
          Login
        </AuthButton>
        <SpacerBottom />
        <AuthButton
          icon="email"
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Register
        </AuthButton>
      </View>
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
