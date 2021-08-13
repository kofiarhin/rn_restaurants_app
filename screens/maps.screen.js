import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import {Searchbar} from 'react-native-paper';
import {ActivityIndicator} from 'react-native-paper';

// context
import {RestaurantContext} from '../context/restaurant/restaurant.context';
import {LocationContext} from '../context/locations/location.context';

export const MapsScreen = ({navigation}) => {
  const {restaurants, isLoading} = useContext(RestaurantContext);
  const {location, keyword, searchLocation} = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [region, setRegion] = useState(null);
  useEffect(() => {
    //  calculate region

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
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={80} />
        </View>
      ) : (
        <>
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
            }}>
            {restaurants.map(restaurant => {
              return (
                <Marker
                  key={restaurant.name}
                  title={restaurant.name}
                  coordinate={{
                    latitude: restaurant.geometry.location.lat,
                    longitude: restaurant.geometry.location.lng,
                  }}>
                  <Callout
                    onPress={() =>
                      navigation.navigate('Details', {restaurant})
                    }>
                    <View
                      style={{
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{uri: restaurant.photos[0]}}
                        style={{
                          width: 200,
                          height: 150,
                          marginBottom: 10,
                        }}
                      />

                      <Text style={[styles.text]}> {restaurant.name}</Text>
                    </View>
                  </Callout>
                </Marker>
              );
            })}
          </MapView>
        </>
      )}
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
  text: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
  },
});
