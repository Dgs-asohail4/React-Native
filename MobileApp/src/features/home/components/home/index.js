import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import styles from './styles';

import Button from '../../../../components/button'

import {USER_KEY} from '.././../../../global/config';
import { COLOR_PRIMARY } from '../../../../global/theme/default';
import { PushNewScreen, ChangeStack } from '../../../../navigation/helper';

export default class Home extends Component {

    constructor(props){
      super(props);

      this.state = {
        visible:false
      }
    }
    logout = async () => {
      try {
        await AsyncStorage.removeItem(USER_KEY)
        ChangeStack(this.props, "Auth", "", false);
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