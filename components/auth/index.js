import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';



// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

export default function Auth(props) {
	const AuthStack = createStackNavigator();

  	return (
  		<AuthStack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
  			<AuthStack.Screen name="Login" path="login" component={Login}/>
  		</AuthStack.Navigator>
  	);
}