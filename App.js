/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DetailsScreen from './src/DetailsScreen';
import CounterApp    from './src/CounterApp'

const RootStack = createStackNavigator(
  {
    Counter: CounterApp ,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Counter',
  });

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}