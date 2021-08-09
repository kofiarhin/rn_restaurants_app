import React, {createContext, useState} from 'react';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

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
