import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import styles from './styles';

import {PushNewScreen, ChangeStack} from '../../../../navigation/helper';

import {USER_KEY} from '.././../../../global/config';
export default class Home extends Component {

    logout = async () => {
      try {
        await AsyncStorage.removeItem(USER_KEY)
        ChangeStack(this.props, "auth.login", "");
      } catch (err) {
        console.log('error signing out...: ', err)
      }
    }

    render() {
      console.log("Home component");
      return (
        <View style={styles.container}>
          <Text>Hello from home screen</Text>
          <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          onPress={() => {
            PushNewScreen(this.props, "app.screen2", "Screen2");
          }}
          title="View next screen"
        />
        </View>
      )
    }
}