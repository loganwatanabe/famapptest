import React, {useContext} from 'react';
import { Text, View, Button } from 'react-native';

import {AuthContext} from './auth/AuthProvider'





export default function ModalScreen({navigation}) {

	const { user, setUser } = useContext(AuthContext);
	
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>{user}</Text>
        <Button onPress={() => {console.log(user); navigation.goBack()}} title="Dismiss" />
      </View>
  );
}