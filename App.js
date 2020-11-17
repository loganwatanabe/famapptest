import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './components/auth/Landing'
import LoadingScreen from './components/common/LoadingScreen'
import Home from './components/account/Home'
import AboutUs from './components/about/AboutUs'

import Auth from './components/auth';

export default function App() {

  const [isLoading, setIsLoading] = useState(false)//change to true once auth check is ready
  const [isSignout, setIsSignout] = useState(false)
  const [userToken, setUserToken] = useState(null)

  
  useEffect(() => {
    
  }, [])

  const toggleUsertoken = ()=>{
    let temp = userToken===null ? true : !userToken
    setUserToken(temp)
  }





  const MainStack = createStackNavigator();
  const RootStack = createStackNavigator();

  const MainStackScreen = ()=>{
    return (
      <MainStack.Navigator initialRouteName="Home">

        
        {isLoading ? (
          <MainStack.Screen name="Loading" component={LoadingScreen} />
          ) : userToken == null ? (
            // No token found, user isn't signed in
            <MainStack.Screen
              name="Auth"
              component={Auth}
              options={{
                title: 'Sign in',
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: isSignout ? 'pop' : 'push',

                toggleUsertoken: toggleUsertoken
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

  function ModalScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }

  return(
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
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
