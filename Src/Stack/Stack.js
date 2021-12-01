import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import Aboutpage from '../Homepage/Aboutpage';
import Register from '../Login/Register';


const Stack = createStackNavigator()



const Navigation = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator screenOptions={{headerShown:false}}>
                 <Stack.Screen name="Home" component={Homepage}  />
                 <Stack.Screen name="about" component={Aboutpage} />
                 <Stack.Screen name="login" component={Login} />
                 <Stack.Screen name="register" component={Register} />
                 
             </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
