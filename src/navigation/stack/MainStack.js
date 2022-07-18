import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
import MainScreen from '@pages/Main/Main';
import AddTaskScreen from '@pages/Add/AddTask';
import UpdateTaskScreen from '@pages/Edit/UpdateTask';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
      <Stack.Screen name="UpdateTask" component={UpdateTaskScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
