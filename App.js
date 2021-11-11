import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View,Image,SafeAreaView,TouchableOpacity,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Loading from './src/Screens/Loading';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuApp from './src/Screens/MenuApp';
import Buy from './src/Screens/Buy';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LoadingScreen({ navigation }){
  setTimeout(()=>{
navigation.replace('Login')
  },2000);
return (
  <View>
    <Loading/>
  </View>
);
}


export default function App (){
    return(
      
      <NavigationContainer >
          <Stack.Navigator headerMode="none" initialRouteName="Loading">
          <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>  
          <Stack.Screen name="Home" component={MenuApp} options={{headerShown:false}}/>  
          <Stack.Screen name="Buy" component={Buy} options={{headerShown:false}}/>  
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
