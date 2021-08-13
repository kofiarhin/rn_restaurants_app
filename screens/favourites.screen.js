import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Favourites} from '../components/Favourites/favourites.component';

export const FavouritesScreen = props => {
  return (
    <View style={styles.container}>
      <Favourites {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
