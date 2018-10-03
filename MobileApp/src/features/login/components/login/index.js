import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native'

import styles from './styles';

import {USER_KEY} from '../../../../global/config'
import {ChangeStack, PushNewScreen} from '../../../../navigation/helper';


export default class Login extends Component {
  state = {
    username: '', password: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    const { username, password } = this.state
    try {
       // login with provider
       if(username == undefined || username == ""){
          return;
       }
       if(password == undefined || password == ""){
        return;
       }
       const user = await AsyncStorage.setItem(USER_KEY, username)
       console.log('user successfully signed in!', user)
       ChangeStack(this.props, "app.home", "Home");
    } catch (err) {
      console.log('error:', err)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign In'
          onPress={this.signIn}
        />

        <Button
          title='Sign up'
          onPress={()=>PushNewScreen(this.props, "auth.signup", "")}
        />
      </View>
    )
  }
}