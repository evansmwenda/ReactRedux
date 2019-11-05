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
import CounterApp from './src/CounterApp'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  counter:0,//initial state of the variable counter
}

const reducer = (state=initialState) =>{
  //this is a reducer
  //takes previous state and an action as arguement
  // and returns a new state
  return state
}



const store = createStore(reducer);//create store
class App extends Component {
  

  render(){
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
      
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

export default App;
