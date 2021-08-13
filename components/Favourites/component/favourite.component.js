import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FavouritesContext} from '../../../context/favourites/favourites.context';

export const Favourite = ({restaurant}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContext);

  const isFavourite = favourites.find(
    item => item.placeId == restaurant.placeId,
  );

  return (
    <View
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 8000,
      }}>
      <TouchableOpacity
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }>
        <Icon
          name={isFavourite ? 'heart-circle-outline' : 'heart-outline'}
          size={30}
          color={isFavourite ? 'red' : 'white'}
        />
      </TouchableOpacity>
    </View>
  );
};
