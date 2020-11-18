import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {AuthProvider} from './components/auth/AuthProvider'

import ModalScreen from './components/ModalScreen'
import MainScreen from './components/MainScreen'

import {config} from './components/routing/link-config'

export default function App() {



  const RootStack = createStackNavigator();

  return(
    <AuthProvider>
      <NavigationContainer linking={config} fallback={<Text>Loading...</Text>}>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="Main" component={MainScreen} />
          <RootStack.Screen name="Modal" component={ModalScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
