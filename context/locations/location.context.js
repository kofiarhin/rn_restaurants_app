import React, {createContext, useEffect, useState} from 'react';
import {locationRequest, locationTransform} from './location.service';
import {
  restaurantRequest,
  restaurantTransform,
} from '../restaurant/restaurant.service';

export const LocationContext = createContext();
export const LocationContextProvider = ({children}) => {
  const [location, setLocation] = useState({});
  const [keyWord, setKeyWord] = useState('Chicago');
  const [error, setError] = useState(false);

  useEffect(() => {
    locationRequest()
      .then(locationTransform)
      .then(result => {
        setLocation(result);
      })
      .catch(err => {
        setError(true);
      });
  }, []);

  const searchLocation = searchTerm => {
    // to lowercase first
    //seach location
    const search = searchTerm.toLowerCase();
    locationRequest(search)
      .then(locationTransform)
      .then(response => {
        setLocation(response);
      })
      .catch(error => console.log(error));
  };
  return (
    <LocationContext.Provider
      value={{
        location,
        keyWord,
        searchLocation,
        setKeyWord,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
