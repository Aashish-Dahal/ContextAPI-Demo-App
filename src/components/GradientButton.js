import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/MaterialIcons';
const GradientButton = ({onPress, text, icon, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={['#08d4c4', '#01ab9d']} style={style}>
        <Text style={styles.textSign}>{text}</Text>
        <Icons name={icon} color="white" size={20} />
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default GradientButton;
