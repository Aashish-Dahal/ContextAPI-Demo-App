import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import GradientButton from '../GradientButton';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          resizeMode="stretch"
          source={require('../../../assets/images/logo.png')}></Image>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay Connected with everyone!</Text>
        <Text style={styles.text}>Sign in with Account</Text>
        <View style={styles.button}>
          <GradientButton
            onPress={() => navigation.navigate('LoginScreen')}
            text="Get Started"
            style={styles.signIn}
            icon="navigate-next"></GradientButton>
        </View>
      </View>
    </View>
  );
};
const {height} = Dimensions.get('screen');
const logo_height = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  logo: {
    width: logo_height,
    height: logo_height,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
});

export default SplashScreen;
