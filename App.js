import React, { useState } from 'react';
import { StyleSheet, View  } from 'react-native';

import BottomTab from './component/tabs';
import Login from './component/login';

export default function App() {

  const [ isLogin, setIsLogin ] = useState(false);

  return (
    <View style={styles.container}>
      { !isLogin? <Login/> : <BottomTab/>}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
