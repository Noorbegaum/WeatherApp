import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import RecentSearch from '../screens/RecentSearch';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Search';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
   <>
     <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={StackNav}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={Favourites}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="RecentSearch"
          component={RecentSearch}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      </NavigationContainer>
      </>
    
  );
}
export default MyDrawer;
