import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect, useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, ActivityIndicator} from 'react-native';
import LoginScreen, {styles} from './LoginScreen';
import SplashScreen from './SplashScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import {AuthContext} from '../context/context';

const Stack = createNativeStackNavigator();
const RootNativeStackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('Acagsa1215@3$ahvaa');
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('Acagsa1215@3$ahvaa');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {userToken === null ? (
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
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}></Stack.Screen>
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default RootNativeStackScreen;
