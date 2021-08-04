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
import {ActivityIndicator} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export const Restaurants = ({navigation}) => {
  const {restaurants, isLoading} = useContext(RestaurantContext);

  const renderRestaurants = () => {
    const renderRating = rating => {
      if (rating) {
        const ratingArr = Array.from(new Array(Math.floor(rating)));
        const mapResult = ratingArr.map((item, index) => {
          // return icons
          return (
            <FontAwesome name="star" key={index} size={20} color="#FECD1A" />
          );
        });
        return mapResult;
      }
    };

    const renderIsOpen = item => {
      if (item.openingHours && item.openingHours.openNow) {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {marginRight: 10}]}>Open</Text>
            {/* change icon */}
            <FontAwesome name="unlock" size={25} color="green" />
          </View>
        );
      } else {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {marginRight: 10}]}>closed</Text>
            <FontAwesome name="lock" size={25} color="red" />
          </View>
        );
      }
    };

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
              <Text style={[styles.text, {marginBottom: 10}]}>
                {' '}
                {item.name}{' '}
              </Text>
              <Text style={styles.text}> {item.vicinity} </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                }}>
                {renderRating(item.rating)}
              </View>

              <View>{renderIsOpen(item)}</View>
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
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={80} />
          </View>
        ) : (
          renderRestaurants()
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
  },
  textBold: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});
