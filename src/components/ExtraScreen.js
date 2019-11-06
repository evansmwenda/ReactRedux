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

class ExtraScreen extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
            <Text style={{fontSize:20}}>Go To TOP</Text>
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



export default ExtraScreen;
