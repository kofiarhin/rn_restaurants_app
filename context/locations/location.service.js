import {locations} from './mock/location.mock';

export const locationRequest = (searchTerm = 'san francisco') => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm];
    if (!location) {
      reject('Location not found');
    }

    resolve(location);
  });
};

export const locationTransform = result => {
  const {results} = result;
  const {location, viewport} = results[0].geometry;

  const {lat, lng} = location;
  return {lat, lng, viewport};
};
