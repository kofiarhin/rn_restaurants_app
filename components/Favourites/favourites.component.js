import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FavouritesContext} from '../../context/favourites/favourites.context';
import {Favourite} from './component/favourite.component';
import {DefaultText} from '../constants/typography';

export const Favourites = ({navigation}) => {
  const {favourites} = useContext(FavouritesContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        {favourites.length > 0 ? (
          <>
            <Text
              style={[
                styles.text,
                {textAlign: 'center', marginBottom: 20, fontWeight: 'bold'},
              ]}>
              {' '}
              Favourites
            </Text>
            <FlatList
              data={favourites}
              keyExtractor={item => item.name}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginBottom: 20,
                    }}
                    onPress={() =>
                      navigation.navigate('Details', {restaurant: item})
                    }>
                    <Favourite restaurant={item} />
                    <Image
                      source={{
                        uri: item.photos[0],
                      }}
                      style={styles.img}
                    />
                    <Text style={styles.text}> {item.name} </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </>
        ) : (
          <View>
            <Text
              style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>
              {' '}
              No favourites!
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  img: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    marginBottom: 10,
  },
});
