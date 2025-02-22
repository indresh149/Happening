import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import LoadingOverlay from './src/components/LoadingOverlay';
import LoginScreen from './src/screens/Auth/LoginScreen';
import BookingScreen from './src/screens/Main/BookingScreen';
import HomeScreen from './src/screens/Main/HomeScreen';
import AccountScreen from './src/screens/Main/AccountScreen';
import EventDetailsScreen from './src/screens/Main/EventDetailsScreen';
import SeatSelectionScreen from './src/screens/Main/SeactSelectionScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
});

const HomeTabIcon = ({focused, color}: {focused: boolean; color: string}) => (
  <Image
    source={require('./assets/icons/home.png')}
    style={[styles.backIcon, focused ? {tintColor: color} : {}]}
  />
);

const PopularTabIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Image
    source={require('./assets/icons/appointment.png')}
    style={[styles.backIcon, focused ? {tintColor: color} : {}]}
  />
);

const ChatTabIcon = ({focused, color}: {focused: boolean; color: string}) => (
  <Image
    source={require('./assets/icons/magnifying-glass.png')}
    style={[styles.backIcon, focused ? {tintColor: color} : {}]}
  />
);

const WishlistTabIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Image
    source={require('./assets/icons/heart.png')}
    style={[styles.backIcon, focused ? {tintColor: color} : {}]}
  />
);

const ProfileTabIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Image
    source={require('./assets/icons/account.png')}
    style={[styles.backIcon, focused ? {tintColor: color} : {}]}
  />
);

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7E2CCF',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: HomeTabIcon}}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingScreen}
        options={{tabBarIcon: PopularTabIcon}}
      />
      <Tab.Screen
        name="Search"
        component={EventDetailsScreen}
        options={{tabBarIcon: ChatTabIcon}}
      />
      <Tab.Screen
        name="Wishlist"
        component={SeatSelectionScreen}
        options={{tabBarIcon: WishlistTabIcon}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{tabBarIcon: ProfileTabIcon}}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const [initialRoute, setInitialRoute] = useState('LoginScreen');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      try {
        const login = await AsyncStorage.getItem('isLoggedIn');
        console.log('login', login);
        if (login) {
          setInitialRoute('AuthStack');
        } else {
          setInitialRoute('LoginScreen');
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchToken();
  }, []);

  if (isLoading) {
    return <LoadingOverlay message={'Loading..'} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={MyTabs} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="EventDetailsScreen"
          component={EventDetailsScreen}
        />
        <Stack.Screen
          name="SeatSelectionScreen"
          component={SeatSelectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
