import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import { styles } from '../screens/LoginScreen';
const Button = ({text,onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.signIn,
        {
          borderColor: '#009387',
          borderWidth: 1,
          marginTop: 15,
        },
      ]}>
      <Text
        style={[
         styles.textSign,
          {
            color: '#009387',
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
