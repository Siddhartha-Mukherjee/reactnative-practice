import React, { useState } from 'react';
import { StyleSheet, View  } from 'react-native';

import BottomTab from './component/tabs';
import Login from './component/login';
import Registration from './component/registration';

import { AuthContext } from './component/auth/authContext';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {

  const [ isLogin, setIsLogin ] = useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() => ({

    signIn: async(foundUser) => {
      
      console.log(foundUser)
     
      const userToken = String(foundUser.userToken);
      const userName = foundUser.username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
     
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);


  return (
    <View style={styles.container}>
       <AuthContext.Provider value={authContext}>

        {  loginState.userToken == null ?  
        
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

       </AuthContext.Provider>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
