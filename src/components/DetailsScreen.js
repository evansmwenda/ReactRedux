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
import { connect } from 'react-redux';


class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{fontSize:20}}>Go BACK</Text>
          </TouchableOpacity>  

          <TouchableOpacity  style={{backgroundColor:'red',width:200,height:50,margin:20,}} onPress={() => this.props.doIncrement()}>
            <Text style={{fontSize:20}}>Increment</Text>
          </TouchableOpacity>

          <Text>Pressed {this.props.counter} times!</Text> 

          <TouchableOpacity style={{backgroundColor:'green',width:200,height:50,margin:20,}} onPress={() => this.props.doDecrement()}>
            <Text style={{fontSize:20}}>Decrement</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
      counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
      doIncrement: () => dispatch({type: 'INCREMENT'}),
      doDecrement: () => dispatch({type: 'DECREMENT'}),
  }
}


// export default DetailsScreen

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);//DetailsScreen