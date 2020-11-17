import React, {useContext, useState} from 'react';
import { Text, View, Button } from 'react-native';

import {AuthContext} from './auth/AuthProvider'

import { createStackNavigator } from '@react-navigation/stack';
import Auth from './auth';
import Home from './account/Home'
import AboutUs from './about/AboutUs'



export default function MainScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false)//change to true once auth check is ready
  const [isSignout, setIsSignout] = useState(false)


	const { user, setUser } = useContext(AuthContext);

	const MainStack = createStackNavigator();
  return (
      <MainStack.Navigator initialRouteName="Home" screenOptions={{title: user}}>
        
        {user == null ? (
            // No token found, user isn't signed in
            <MainStack.Screen
              name="Auth"
              component={Auth}
              options={{
                
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <MainStack.Screen name="Home" component={Home} />
        )}

        <MainStack.Screen name="About" component={AboutUs}/>

      </MainStack.Navigator>
    );

}