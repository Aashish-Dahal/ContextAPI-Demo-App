import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from '../Button';
import GradientButton from '../GradientButton';
import InputField from '../InputField';
import {styles} from './LoginScreen';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/context';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {signUp} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register</Text>
        <Text style={styles.text}>Create your account</Text>
      </View>
      <View style={styles.footer}>
        <InputField icon="email-outline" hintText="Email address" />
        <InputField icon="lock-outline" hintText="Email address" />
        <InputField icon="lock-outline" hintText="Email address" />
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By signing up you agree to our
          </Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
            Terms of service
          </Text>
          <Text style={styles.color_textPrivate}> and</Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
            Privacy policy
          </Text>
        </View>

        <GradientButton
          style={styles.signIn}
          text="Sign Up"
          onPress={() => signUp()}
        />
        <Button
          text="Sign In"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
