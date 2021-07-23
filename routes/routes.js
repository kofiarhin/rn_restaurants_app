import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Details} from '../screens';
import {RestaurantContextProvider} from '../context/restaurant/restaurant.context';
import {LocationContextProvider} from '../context/locations/location.context';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

const Routes = () => {
  return (
    <LocationContextProvider>
      <RestaurantContextProvider>
        <NavigationContainer>
          <HomeStackScreen />
        </NavigationContainer>
      </RestaurantContextProvider>
    </LocationContextProvider>
  );
};

export default Routes;
