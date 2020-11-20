import React, {useContext, useState} from 'react';
import { Text, View, Button } from 'react-native';

import {AuthContext} from './auth/AuthProvider'

import { createStackNavigator } from '@react-navigation/stack';
import { Link, CommonActions } from '@react-navigation/native';
import Auth from './auth';
import Home from './account/Home'
import AboutUs from './about/AboutUs'
import Landing from './common/Landing'

import ErrorScreen from './common/ErrorScreen'
import LinkButton from './common/LinkButton'




export default function MainScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false)//change to true once auth check is ready
  const [isSignout, setIsSignout] = useState(false)


	const { user, setUser } = useContext(AuthContext);

	const MainStack = createStackNavigator();


  return (
      <MainStack.Navigator initialRouteName="Home" 
      	screenOptions={{
      		headerTitle: (props) => {return(<Link to={'/home'}>FamApp</Link>)},
      		headerTitleAlign: 'center',
      		// headerLeft: (props) => <LinkButton to='/' action={navigation.goBack}> back </LinkButton>,
      		//change this left button for native vs web, web doesn't need a back button

      	}}
      >
        
        {user == null ? (
            // No token found, user isn't signed in
            <React.Fragment>
	            <MainStack.Screen name="Landing" component={Landing}/>
	            <MainStack.Screen
	              name="Auth"
	              component={Auth}
	              path="auth"
	              options={{
	                
	            // When logging out, a pop animation feels intuitive
	                animationTypeForReplace: isSignout ? 'pop' : 'push',
	              }}
	            />
            </React.Fragment>
          ) : (
            // User is signed in
            <MainStack.Screen name="Home" component={Home} />
        )}

        <MainStack.Screen name="About" component={AboutUs}/>
        <MainStack.Screen name="404" component={ErrorScreen}/>

      </MainStack.Navigator>
    );

}