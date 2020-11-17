import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function LoadingScreen({navigation}) {
  return (
    <View>
      <Text>Welcome to the App Landing Screen</Text>
       <Button
        onPress={() => navigation.navigate('Main', { screen: 'Auth', params: { screen: 'Login' }})}
        title="Go to Login"
      />
    </View>
  );
}