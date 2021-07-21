import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {Restaurants} from '../components/Restaurants/restaurants.component';

export const Home = props => {
  return (
    <View>
      <Restaurants {...props} />
    </View>
  );
};
