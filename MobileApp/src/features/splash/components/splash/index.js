import React from 'react'
import {
  View,
  Text,
  AsyncStorage
} from 'react-native'

import styles from './styles'
import { ChangeStack } from '../../../../navigation/helper'
import { USER_KEY } from '../../../../global/config'

export default class Splash extends React.Component {
  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)
      if (user) {
        ChangeStack(this.props, "app.home", "Home", true);
      } else {
        ChangeStack(this.props, "auth.login", "", false);
      }
    } catch (err) {
      console.log('error: ', err)
      ChangeStack(this.props, "auth.login", "", false);
    }

  //  ChangeStack(this.props, "app.home", "Home");

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
        <Text style={styles.welcome}>Loading</Text>
        <Text style={styles.welcome}>Loading</Text>
        <Text style={styles.welcome}>Loading</Text>
        <Text style={styles.welcome}>Loading</Text>
        <Text style={styles.welcome}>Loading</Text>

      </View>
    )
  }
}
