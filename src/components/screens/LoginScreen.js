import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from '../Button';
import GradientButton from '../GradientButton';
import InputField from '../InputField';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/context';
const LoginScreen = () => {
  const navigation = useNavigation();
  const {signIn} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome Back</Text>
        <Text style={styles.text}>Login to your account</Text>
      </View>
      <View style={styles.footer}>
        <InputField icon="email-outline" hintText="Email address" />
        <InputField icon="lock-outline" hintText="Password" />
        <TouchableOpacity>
          <Text
            style={{
              color: '#009387',
              marginTop: 10,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <GradientButton
          style={styles.signIn}
          text="Sign In"
          onPress={() => signIn()}
        />
        <Button
          text="Sign Up"
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
    </View>
  );
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
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoginScreen;
