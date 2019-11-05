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


class CounterApp extends Component {

  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={{flexDirection:'row',width:200,justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=> this.props.increaseCounter()}>
            <Text style={{fontSize:20}}>Increase</Text>
          </TouchableOpacity>
          <Text style={{fontSize:18}}>{this.props.counter}</Text>
          <TouchableOpacity onPress={()=> this.props.decreaseCounter()}>
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


function mapStateToProps(state){
    return{
        counter:state.counter
    }
}
function mapDispatchToProps(dispatch){
    return {
        increaseCounter: () => dispatch({type:'INCREASE_VALUE'}),
        decreaseCounter: () => dispatch({type:'DECREASE_VALUE'}),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);
