import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {RestaurantContext} from '../../context/restaurant/restaurant.context';
import {Search} from './component/Search.component';
import {  ActivityIndicator} from "react-native-paper"

export const Restaurants = ({navigation}) => {
  const {restaurants, isLoading} = useContext(RestaurantContext);

  const renderRestaurants = () => {
    return (
      <FlatList
        contentContainerStyle={{
          padding: 20,
        }}
        data={restaurants}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {restaurant: item})}
              style={{
                marginBottom: 20,
              }}>
              <Image source={{uri: item.photos[0]}} style={styles.img} />
              <Text style={styles.text}> {item.name} </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        {/* search component */}
        <Search />
        {/* list of restaurants */}
        {isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
              
            }}>
            <ActivityIndicator
              size={80}
        
            />
          </View>
        ) : (
          renderRestaurants()
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
});
