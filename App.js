import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Routes from './routes/routes';
import {AuthContextProvider} from './context/Auth/auth.context';

const App = () => {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
};
export default App;
