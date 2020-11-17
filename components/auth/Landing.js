import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {AuthContext} from './AuthProvider'


export default function LoadingScreen({navigation}) {
	const { user, setUser } = useContext(AuthContext);
  return (
    <View>
      <Text>Welcome to the App Landing Screen</Text>
       <Button
        onPress={() => navigation.navigate('Main', { screen: 'Auth', params: { screen: 'Login' }})}
        title="Go to Login"
      />
      <Button
        onPress={() => navigation.navigate('Modal')}
        title="Open Modal"
      />

      <Button
        onPress={() => console.log(user)}
        title="console log"
      />
    </View>
  );
}