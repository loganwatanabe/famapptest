import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import {AuthContext} from '../auth/AuthProvider'



export default function Landing({navigation}) {
	const { user, setUser } = useContext(AuthContext);
  return (
    <View>
      <Text>Welcome to the App Landing Screen</Text>
       <Button
        onPress={() => navigation.navigate('Main', { screen: 'Auth', params: { screen: 'Login' }})}
        title="Go to Login"
      />
      <Link to={'/login'}>Go to Login</Link>
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