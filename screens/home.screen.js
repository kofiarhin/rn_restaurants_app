import React, {useContext, useState} from 'react';
import {View, Text, SafeArea, SafeAreaView} from 'react-native';
import {Restaurants} from '../components/Restaurants/restaurants.component';

export const HomeScreen = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Restaurants {...props} />
    </SafeAreaView>
  );
};
