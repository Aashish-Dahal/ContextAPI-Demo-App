import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from '../Button';
import GradientButton from '../GradientButton';
import InputField from '../InputField';
import {styles} from './LoginScreen';
import {useNavigation} from '@react-navigation/native';
const RegisterScreen = () => {
  const navigation = useNavigation();
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

        <GradientButton style={styles.signIn} text="Sign Up" />
        <Button text="Sign In" />
      </View>
    </View>
  );
};

export default RegisterScreen;
