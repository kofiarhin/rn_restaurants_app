import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Routes from './routes/routes';

import {
  restaurantRequest,
  restaurantTransform,
} from './mock/restaurant/restaurant.service';

const App = () => <Routes />;

export default App;
