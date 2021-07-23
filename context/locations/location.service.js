import {locations} from './mock/location.mock';

export const locationRequest = (searchTerm = 'san francisco') => {
  console.log('xxxx', {searchTerm});
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
  const {geometry: location} = results[0];
  const {lat, lng} = location.location;
  return {lat, lng};
};
