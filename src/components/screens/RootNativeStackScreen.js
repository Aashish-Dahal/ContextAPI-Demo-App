import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, ActivityIndicator} from 'react-native';
import LoginScreen, {styles} from './LoginScreen';
import SplashScreen from './SplashScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();
const RootNativeStackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <view style={styles.indicator}>
        <ActivityIndicator size="large" />
      </view>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}></Stack.Screen>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}></Stack.Screen>
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNativeStackScreen;
