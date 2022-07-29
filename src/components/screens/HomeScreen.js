import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AuthContext} from '../context/context';
import GradientButton from '../GradientButton';

const HomeScreen = () => {
  const {signOut} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', marginBottom: 10, fontSize: 18}}>
        Home Screen
      </Text>
      <GradientButton
        text="Sign Out"
        style={styles.signIn}
        onPress={() => signOut()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
});
export default HomeScreen;
