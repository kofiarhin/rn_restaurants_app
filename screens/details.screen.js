import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {List} from 'react-native-paper';
import {colors, DefaultText, SubText} from '../constants';
import {Favourite} from '../components/Restaurants/component/favourite.component';

export const DetailsScreen = ({route, navigation}) => {
  const {restaurant} = route.params;
  const [isBreakfastOpen, setIsBreakfastOpen] = useState(false);
  const [isLunchOpen, setIsLunchOpen] = useState(false);
  const [isDinnerOpen, setIsDinnerOpen] = useState(false);

  const renderRating = rating => {
    const arrRating = Array.from(new Array(Math.ceil(rating)));

    const mappedRating = arrRating.map((item, index) => {
      return (
        <FontAwesome
          key={index}
          name="star"
          size={20}
          color={colors.yellow}
          style={{
            marginRight: 10,
          }}
        />
      );
    });

    return mappedRating;
  };

  return (
    <SafeAreaView>
      {/* back icon */}
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={40} />
        </TouchableOpacity>
      </View>

      {/* show item poistion on map 
        using google map
      */}
      <View style={styles.container}>
        <View>
          <Favourite restaurant={restaurant} />
          <Image
            source={{
              uri: restaurant.photos[0],
            }}
            style={styles.img}
          />
          <DefaultText> {restaurant.name} </DefaultText>
          <SubText> {restaurant.vicinity} </SubText>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {renderRating(restaurant.rating)}
          </View>
        </View>

        <ScrollView>
          <List.Accordion
            title="Breakfast"
            left={props => <List.Icon {...props} icon="bread-slice" />}
            expanded={isBreakfastOpen}
            onPress={() => setIsBreakfastOpen(!isBreakfastOpen)}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={props => <List.Icon {...props} icon="hamburger" />}
            expanded={isLunchOpen}
            onPress={() => setIsLunchOpen(!isLunchOpen)}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={props => <List.Icon {...props} icon="food-variant" />}
            expanded={isDinnerOpen}
            onPress={() => setIsDinnerOpen(!isDinnerOpen)}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// create theme for fonts and spacings
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});
