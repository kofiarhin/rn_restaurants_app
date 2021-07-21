import React, {useContext, useState} from 'react';
import {View, Text, SafeArea, SafeAreaView} from 'react-native';
import {Restaurants} from '../components/Restaurants/restaurants.component';
import {Searchbar} from 'react-native-paper';
import {SearchBar} from 'react-native-screens';

export const Home = props => {
  return (
    <SafeAreaView>
      <View>
        <Searchbar />
        <Restaurants {...props} />
      </View>
    </SafeAreaView>
  );
};
