import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const InputField = ({secureTextEntry, hintText, icon}) => {
  return (
    <View style={[styles.input]}>
      <Icon name={icon} size={20} color="#009387" style={styles.icon}></Icon>
      <TextInput
        placeholder={hintText}
        style={{color: 'black'}}
        placeholderTextColor="grey"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    height: 45,
    marginBottom: 0,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 5,
  },
});
export default InputField;
