import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './store';

import Home from './components/Home';
import AccountPage from './components/AcoountPage';
import {PermissionsAndroid} from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
import messaging from '@react-native-firebase/messaging';

type TabParamList = {
  HomePage: undefined;
  AccountPage: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
// const Drawer = createDrawerNavigator<TabParamList>();

function App(): React.JSX.Element {
  messaging()
    .getToken()
    .then(token => {
      console.log('FCM Token:', token);
    });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="HomePage" component={Home} />
              <Tab.Screen name="AccountPage" component={AccountPage} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
