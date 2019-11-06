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
  static navigationOptions = ({ navigation }) => {
    return {
      title: JSON.stringify(navigation.getParam('otherParam', 'No - Param'))
    };
  };
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          userId: {JSON.stringify(navigation.getParam('user_id', 'NO-ID'))}
        </Text>
        <Text>
          AnotherParam: {JSON.stringify(navigation.getParam('otherParam', 'No - Param'))}
        </Text>
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

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Extras')}>
            <Text style={{fontSize:20}}>Go to EXTRAS</Text>
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