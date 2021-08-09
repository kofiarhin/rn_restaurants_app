import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  const loadFavourites = async () => {
    try {
      const fav = await AsyncStorage.getItem('@favourites');
      if (fav !== null) {
        setFavourites(JSON.parse(fav));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveFavourites = async favs => {
    try {
      const jsonVal = JSON.stringify(favs);
      await AsyncStorage.setItem('@favourites', jsonVal);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const add = restaurant => {
    setFavourites([restaurant, ...favourites]);
  };

  const remove = restaurant => {
    const filtered = favourites.filter(x => x.placeId !== restaurant.placeId);
    setFavourites(filtered);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
