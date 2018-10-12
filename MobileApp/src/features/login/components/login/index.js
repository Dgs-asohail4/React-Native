import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage
} from 'react-native'

import styles from './styles';

import {USER_KEY} from '../../../../global/config'
import {ChangeStack, PushNewScreen} from '../../../../navigation/helper';

import {COLOR_PRIMARY, TEXT_COLOR_PRIMARY} from '../../../../global/theme/default';

import CustomizedTextInput from '../../../../components/textInput';
import Button from '../../../../components/button';

export default class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: 'ahsan.sohail@ibex.co', password: 'Password123'
    }
    this.props.navigator.setDrawerEnabled({
      side: "left",
      enabled: false,
      screen: "global.drawer"
    });
  }


  storeAuthData = async (response) => {
    var data = response.data;
    var authData = { token: data.access_token };
    const user = await AsyncStorage.setItem(USER_KEY, authData)
    return this.props.requireAuthentication();
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    console.log(this.props);
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
       ChangeStack(this.props, "app.home", "Home", true);

    }catch (err) {
      console.log('error:', err)
    }
    //    this.props.loginAction({username,password}).then(
    //       response => {
    //           console.log(this.props);
    //           storeAuthDate(response);
    //     //      dispatch({type: types.LOGIN + SUCCESS_PREFIX, response})
    //       },
    //       error => {
    //           console.log(error);
    //       }
    //     )
    //    //const user = await AsyncStorage.setItem(USER_KEY, username)
    //    //console.log('user successfully signed in!', user)
    //   // ChangeStack(this.props, "app.home", "Home", true);
    // } catch (err) {
    //   console.log('error:', err)
    // }


  }
  render() {
    return (
      <View style={styles.container}>
        <CustomizedTextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor={COLOR_PRIMARY}
          value={this.state.username}
          placeholderTextColor='white'
          inputColor={TEXT_COLOR_PRIMARY}
          onChangeText={val => this.onChangeText('username', val)}
        />
        <CustomizedTextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          value={this.state.password}
          secureTextEntry={true}
          backgroundColor={COLOR_PRIMARY}
          inputColor={TEXT_COLOR_PRIMARY}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          text='Sign In'
          color={COLOR_PRIMARY}
          onPress={this.signIn}
        />
        </View>

        // <Button
        //   text='Sign up'
        //   color={COLOR_PRIMARY}
        //   onPress={()=>PushNewScreen(this.props, "auth.signup", "", false)}
        // />
    )
  }
}