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
import { createAppContainer ,StackNavigator, addNavigationHelpers} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider, connect } from "react-redux";

import Routes from "./src/config/routes";
import getStore from "./src/store";

const AppNavigator = StackNavigator(Routes);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

connect(state => ({
  nav: state.nav
}))

class AppWithNavigationState extends Component {
  render() {
      return (
          <AppNavigator
              navigation={addNavigationHelpers({
                  dispatch: this.props.dispatch,
                  state: this.props.nav
              })}
          />
      );
  }
}

const store = getStore(navReducer);

export default function App() {
  return (
      <Provider store={store}>
          <AppWithNavigationState />
      </Provider>
  );
}




// const RootStack = createStackNavigator(
//   {
//     Counter: CounterApp ,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Counter',
//   });

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }