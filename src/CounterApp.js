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

import {connect} from 'react-redux'
import DetailsScreen from './DetailsScreen';
import { StackNavigator } from "react-navigation";


class CounterApp extends Component {

  render(){
    return (
      <View style={styles.mainContainer}>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
            <Text style={{fontSize:20}}>Go to details</Text>
          </TouchableOpacity>
      </View>

    );
  }
  
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
});



export default CounterApp;
