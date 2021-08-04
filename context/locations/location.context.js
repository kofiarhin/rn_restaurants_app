import React, {createContext, useEffect, useState} from 'react';
import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();
export const LocationContextProvider = ({children}) => {
  const [location, setLocation] = useState({});
  const [keyword, setKeyword] = useState('Chicago');
  const [error, setError] = useState(null);

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
    const search = searchTerm.toLowerCase();

    locationRequest(search)
      .then(locationTransform)
      .then(response => {
        setLocation(response);
      })
      .catch(error => setError(error));
  };
  return (
    <LocationContext.Provider
      value={{
        location,
        keyword,
        searchLocation,
        setKeyword,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
