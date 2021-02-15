import React, { useState } from 'react';
import { StyleSheet, View  } from 'react-native';

import BottomTab from './component/tabs';
import Login from './component/login';
import Registration from './component/registration';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  const [ isLogin, setIsLogin ] = useState(false);

  return (
    <View style={styles.container}>
      { !isLogin? 
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" 
          screenOptions={{
            headerShown: false
          }} 
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    
      : <BottomTab/>}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
