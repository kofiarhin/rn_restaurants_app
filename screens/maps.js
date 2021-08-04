import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Searchbar} from 'react-native-paper';

// context
import {RestaurantContext} from '../context/restaurant/restaurant.context';
import {LocationContext} from '../context/locations/location.context';

export const Maps = () => {
  const {restaurants} = useContext(RestaurantContext);
  const {location, keyword, searchLocation} = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [region, setRegion] = useState(null);
  useEffect(() => {
    //  calculate region

    console.log(location);

    const mapRegion = {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta:
        location.viewport.northeast.lat - location.viewport.southwest.lat,
      longitudeDelta: 0.02,
    };

    setRegion(mapRegion);
  }, [location]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={styles.search}>
        {/* searchbar */}
        <Searchbar
          value={searchKeyword}
          onChangeText={text => setSearchKeyword(text)}
          onSubmitEditing={() => {
            searchLocation(searchKeyword.toLowerCase());
          }}
        />
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        region={region}
        style={{
          flex: 1,
        }}></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    position: 'absolute',
    top: 50,
    zIndex: 1000,
    width: '100%',
    paddingHorizontal: 20,
  },
});
