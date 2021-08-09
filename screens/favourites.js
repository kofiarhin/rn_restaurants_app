import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {FavouritesContext} from '../context/favourites/favourites.context';

export const Favourites = () => {
  const {favourites} = useContext(FavouritesContext);

  console.log(favourites);
  return (
    <View>
      <Text> Favourites Screen </Text>
    </View>
  );
};
