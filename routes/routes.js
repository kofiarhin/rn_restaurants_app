import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Details, Maps} from '../screens';
import {RestaurantContextProvider} from '../context/restaurant/restaurant.context';
import {LocationContextProvider} from '../context/locations/location.context';
import Icon from 'react-native-vector-icons/Ionicons';

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

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => {
  return (
    <AppTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#04009A',
        inactiveTintColor: '#687980',
      }}>
      <AppTabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <AppTabs.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="navigate-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </AppTabs.Navigator>
  );
};

const Routes = () => {
  return (
    <LocationContextProvider>
      <RestaurantContextProvider>
        <NavigationContainer>
          <AppTabsScreen />
        </NavigationContainer>
      </RestaurantContextProvider>
    </LocationContextProvider>
  );
};

export default Routes;
