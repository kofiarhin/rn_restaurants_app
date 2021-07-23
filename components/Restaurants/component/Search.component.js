import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../context/locations/location.context';

export const Search = () => {
  const {location, searchLocation, keyWord} = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keyWord);
  useEffect(() => {
    setSearchKeyWord(keyWord);
  }, []);

  return (
    <View
      style={{
        padding: 20,
      }}>
      <Searchbar
        placeholder="Search Location"
        value={searchKeyWord}
        onChangeText={text => setSearchKeyWord(text)}
        onSubmitEditing={() => searchLocation(searchKeyWord)}
      />
    </View>
  );
};
