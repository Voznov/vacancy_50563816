import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import 'moment/locale/ru';

import {SCREEN_DATA} from './screens';
import store from './store';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer style={StyleSheet.absoluteFill}>
          <Stack.Navigator>
            {Object.entries(SCREEN_DATA).map(([name, params]) => (
              <Stack.Screen key={name} name={name} {...params} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
