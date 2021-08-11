import React, {useContext} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {AuthButton} from '../components/Auth/auth.styles';
import {AuthContext} from '../context/Auth/auth.context';

export const Settings = () => {
  const {onLogout} = useContext(AuthContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AuthButton onPress={() => onLogout()}>Logout</AuthButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
