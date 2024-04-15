import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from './News';
import HomePage from './HomePage';

type StackParamList = {
  Home: undefined;
  News: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

export default Home;
