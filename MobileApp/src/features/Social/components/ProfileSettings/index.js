import React, { Component } from 'react';
import { Text, View, ScrollView,KeyboardAvoidingView,TouchableOpacity,TextInput } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'
import Button from '../../../../components/button'
import MyTextInput from '../../../../components/MyTextInput/container'
import SocialSetting from '../../../../components/SocialSetting/container'

export default class Social extends Component {
  static navigationOptions = {
    title: 'Profile Settings'.toUpperCase(),
  };

  user = data.getUser();

  state = {
    firstName: this.user.firstName,
    lastName: this.user.lastName,
    email: this.user.email,
    country: this.user.country,
    phone: this.user.phone,
    password: this.user.password,
    newPassword: this.user.newPassword,
    confirmPassword: this.user.confirmPassword,
  };
  onFirstNameInputChanged = (text) => {
    this.setState({ firstName: text });
  };

  onLastNameInputChanged = (text) => {
    this.setState({ lastName: text });
  };

  onEmailInputChanged = (text) => {
    this.setState({ email: text });
  };

  onCountryInputChanged = (text) => {
    this.setState({ country: text });
  };

  onPhoneInputChanged = (text) => {
    this.setState({ phone: text });
  };

  onPasswordInputChanged = (text) => {
    this.setState({ password: text });
  };

  onNewPasswordInputChanged = (text) => {
    this.setState({ newPassword: text });
  };

  onConfirmPasswordInputChanged = (text) => {
    this.setState({ confirmPassword: text });
  };
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary,header6,accentColor,baseColor,right,clear} = this.props.globalStyles.textStyle
    return (
      <ScrollView style={styles.root}>
      <KeyboardAvoidingView>
        <View style={styles.header}>
          <Avatar img={this.user.photo} big/>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <Text style={[header6,primary,accentColor]}>INFO</Text>
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='First Name'
              value={this.state.firstName}
              style={[right,clear,baseColor]}
              onChangeText={this.onFirstNameInputChanged}
            />
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='Last Name'
              value={this.state.lastName}
              onChangeText={this.onLastNameInputChanged}
              style={[right,clear,baseColor]}
            />
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='Email'
              value={this.state.email}
              onChangeText={this.onEmailInputChanged}
              style={[right,clear,baseColor]}
            />
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='Country'
              value={this.state.country}
              onChangeText={this.onCountryInputChanged}
              style={[right,clear,baseColor, {flex:1,flexDirection:'row'}]}
            />
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='Phone'
              value={this.state.phone}
              onChangeText={this.onPhoneInputChanged}
              style={[right,clear,baseColor]}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <Text style={[primary,header6,accentColor]}>CHANGE PASSWORD</Text>
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='Old Password'
              value={this.state.password}
              style={[right,clear]}
              secureTextEntry
              onChangeText={this.onPasswordInputChanged}
            />
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='New Password'
              value={this.state.newPassword}
              style={[right,clear]}
              secureTextEntry
              onChangeText={this.onNewPasswordInputChanged}
            />
          </View>
          <View style={styles.row}>
            <MyTextInput
              label='Confirm Password'
              value={this.state.confirmPassword}
              style={[right,clear]}
              secureTextEntry
              onChangeText={this.onConfirmPasswordInputChanged}
            />
          </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <Text style={[primary, header6,accentColor]}>CONNECT YOUR ACCOUNT</Text>
          </View>
          <View style={styles.row}>
            <SocialSetting name='Twitter' icon={'twitter'} tintColor={Theme[this.props.theme].colors.twitter} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Google' icon={'google'} tintColor={Theme[this.props.theme].colors.google} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Facebook' icon={'facebook'} tintColor={Theme[this.props.theme].colors.facebook} />
          </View>
        </View>
        </View>
        <Button
          text='Save'
          style={{width:250, borderRadius:20,marginBottom:0}}
          color={Theme[this.props.theme].colors.gradients.base[0]}
        />
      </KeyboardAvoidingView>
    </ScrollView>
    );
  }
}