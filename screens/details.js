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
import {List} from 'react-native-paper';

export const Details = ({route, navigation}) => {
  const {restaurant} = route.params;
  const [isBreakfastOpen, setIsBreakfastOpen] = useState(false);
  const [isLunchOpen, setIsLunchOpen] = useState(false);
  const [isDinnerOpen, setIsDinnerOpen] = useState(false);

  return (
    <SafeAreaView>
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
          <Image
            source={{
              uri: restaurant.photos[0],
            }}
            style={styles.img}
          />
          <Text style={styles.text}> {restaurant.name} </Text>
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
