import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home  from './home';
import  Product  from './product';
import Setting  from './setting';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Product" component={Product} />
            <Tab.Screen name="Setting" component={Setting} />
            </Tab.Navigator>
      </NavigationContainer>
    )
}

export default BottomTab;