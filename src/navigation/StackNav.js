import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Search';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import Home from '../screens/Home';

const StackNav = () => {
  return (

      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

  );
};
export default StackNav;
