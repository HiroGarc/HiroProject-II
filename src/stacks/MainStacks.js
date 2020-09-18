import React from 'react';
import{createStackNavigator}from '@react-navigation/stack';

import TelaInicial from '../screens/TelaInicial';
import SignIn  from '../screens/SignIn';
import SignUp from '../screens/SignUp';


const stack = createStackNavigator();


export default()=>(

    <stack.Navigator
       screenOptions={{
        headerShown:false

       }}
    >
      <stack.Screen name ="TelaInicial" component={TelaInicial} />
      <stack.Screen name ="SignIn" component={SignIn} />
      <stack.Screen name ="SignUp" component={SignUp} />
      


    </stack.Navigator>

);


