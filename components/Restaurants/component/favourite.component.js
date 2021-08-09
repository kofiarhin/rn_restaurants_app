import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Favourite = ({restaurant}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 8000,
      }}>
      <TouchableOpacity onPress={() => console.log('add to favourite')}>
        <Icon name="heart-circle-outline" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};
