import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// import Icon from 'react-native-vector-icons/Ionicons';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './components/Home';
import AccountPage from './components/AcoountPage';

type TabParamList = {
  HomePage: undefined;
  AccountPage: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
// const Drawer = createDrawerNavigator<TabParamList>();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="HomePage" component={Home} />
            <Tab.Screen name="AccountPage" component={AccountPage} />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
