import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Landing from './Landing';



// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

export default function Auth(props) {
	const AuthStack = createStackNavigator();
	useEffect(() => {
    	console.log("auth")
    	console.log(props)
  	}, [])
  	return (
  		<AuthStack.Navigator initialRouteName="Landing">
  			<AuthStack.Screen name="Landing" component={Landing}/>
  			<AuthStack.Screen name="Login" component={Login}/>
  		</AuthStack.Navigator>
  	);
}