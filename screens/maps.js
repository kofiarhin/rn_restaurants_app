import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';

export const Maps = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <MapView
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};
