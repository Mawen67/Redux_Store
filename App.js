import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import cartPage from './src/screen/cartPage';
import FruitPage from './src/screen/FruitPage';
import VegetablePage from './src/screen/VegetablePage';
//import store from './src/store'


const Tab = createMaterialTopTabNavigator();
const Stack=createStackNavigator();

export default class App extends Component {

  createStoreTab = ({navigation}) => 
    <Tab.Navigator
    tabBarOptions={{labelStyle:{fontSize:15, letterSpacing:2}, style:{backgroundColor:'#e0ffff'}}}>
      <Tab.Screen name = 'Fruits' component = {FruitPage} />
      <Tab.Screen name = 'Vegetables' component = {VegetablePage} />
    </Tab.Navigator>

  createStack = ({navigation}) =>
  <Stack.Navigator>
    <Stack.Screen name='Store' children={this.createStoreTab} 
      options={{
      headerTitleStyle: {fontStyle: 'italic', fontSize: 30, letterSpacing: 5 },
      headerTitleAlign: 'center',
      headerRight:()=> (<AntDesign name='shoppingcart' size={30} style={{paddingRight:15}} onPress={() => navigation.navigate('Cart')}/>),
      headerStyle: {backgroundColor: '#add8e6', height:80},
      }}
    />
    <Stack.Screen name='Cart' component={cartPage} 
    options={{
      headerTitleStyle: {fontStyle: 'italic', fontSize: 30, letterSpacing: 5 },
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#add8e6', height:80},
      }}
    />
  </Stack.Navigator>

  render() {
    return (
      // <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=' ' children={this.createStack} options={{headerStyle: {height:0}}}/>
        </Stack.Navigator>
      </NavigationContainer>
      // </Provider>
  )};
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
