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
import {RestaurantContext} from '../../mock/restaurant/restaurant.context';

export const Restaurants = ({navigation}) => {
  const {restaurants} = useContext(RestaurantContext);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          contentContainerStyle={{
            padding: 20,
          }}
          data={restaurants}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {restaurant: item})
                }
                style={{
                  marginBottom: 20,
                }}>
                <Image source={{uri: item.photos[0]}} style={styles.img} />
                <Text style={styles.text}> {item.name} </Text>
              </TouchableOpacity>
            );
          }}
        />
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
