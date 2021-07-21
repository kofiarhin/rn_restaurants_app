import React, {createContext, useState, useEffect} from 'react';
import {
  restaurantRequest,
  restaurantTransform,
} from '../restaurant/restaurant.service';

export const RestaurantContext = createContext();
export const RestaurantContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    restaurantRequest()
      .then(restaurantTransform)
      .then(result => {
        setRestaurants(result);
      });
  }, []);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};
