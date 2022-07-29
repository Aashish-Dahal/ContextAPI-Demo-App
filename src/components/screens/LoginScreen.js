import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from '../Button';
import GradientButton from '../GradientButton';
import InputField from '../InputField';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();

  return <View style={styles.container}></View>;
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },

  signIn: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
export default LoginScreen;
