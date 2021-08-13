import React from 'react';
import {View, Text} from 'react-native';
import {Settings} from '../components/Settings/settings.component';

export const SettingsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Settings />
    </View>
  );
};
