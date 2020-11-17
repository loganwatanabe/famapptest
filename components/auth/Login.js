import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {AuthContext} from './AuthProvider'





export default function Login({navigation}) {

	const { user, setUser, login } = useContext(AuthContext);
  return (
    <View>
      <Text>Login Here</Text>
      <Text>{user}</Text>
      <Button onPress={() => {login()}}
        title="Auto Login"/>
    </View>
  );
}