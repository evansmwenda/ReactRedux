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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class CounterApp extends Component {
  state={
    counter:0
  }

  increaseCounter = () => {
    this.setState({counter:this.state.counter+1})
  }

  decreaseCounter = () => {
    this.setState({counter:this.state.counter-1})
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={{flexDirection:'row',width:200,justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=> this.increaseCounter()}>
            <Text style={{fontSize:20}}>Increase</Text>
          </TouchableOpacity>
          <Text style={{fontSize:18}}>{this.state.counter}</Text>
          <TouchableOpacity onPress={()=> this.decreaseCounter()}>
            <Text style={{fontSize:20}}>Decrease</Text>
          </TouchableOpacity>
        </View>
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
