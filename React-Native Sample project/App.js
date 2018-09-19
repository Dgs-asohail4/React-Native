import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Router, Scene,  Drawer } from 'react-native-router-flux';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import reducer from './app/Reducers/rootReducer'
import Splash from './app/Screens/Splash/splash'

const store = createStore(reducer, applyMiddleware());
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <Provider store={store}>
      <Router>
      <Scene>
        <Scene key="scarlet"
          component={Splash}
          title="Scarlet"
          initial
        />
        </Scene>
      </Router>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});