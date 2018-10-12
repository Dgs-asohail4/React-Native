import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import styles from './styles';

import {PushNewScreen, ChangeStack, ChangeToTabView} from '../../../../navigation/helper';

import Button from '../../../../components/button'

import {USER_KEY} from '.././../../../global/config';
import { COLOR_PRIMARY } from '../../../../global/theme/default';
export default class Home extends Component {

    logout = async () => {
      try {
        await AsyncStorage.removeItem(USER_KEY)
        ChangeStack(this.props, "auth.login", "", false);
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
          color={COLOR_PRIMARY}
          borderRadius={30}
          onPress={this.logout}
          text="Sign Out"
        />
        <Button
          onPress={() => {
            PushNewScreen(this.props, "app.screen2", "Screen2", true);
          }}
          color={COLOR_PRIMARY}
          text="View next screen"
        />
        </View>

        // <Button
        //   onPress={() => {
        //     ChangeToTabView();
        //   }}
        //   color={COLOR_PRIMARY}
        //   text="Change to tabview"
        // />
      )
    }
}