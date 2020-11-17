import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {AuthContext} from '../auth/AuthProvider'


export default function Home() {
	const { user, setUser, logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => {logout()}} title="Logout"/>
    </View>
  );
}