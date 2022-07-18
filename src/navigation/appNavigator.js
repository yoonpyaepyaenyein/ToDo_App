import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';

//Component
import MainStack from './stack/MainStack';
import store from '../store';

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;
