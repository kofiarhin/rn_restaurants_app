import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

export const Settings = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}> Settings Screen </Text>
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
