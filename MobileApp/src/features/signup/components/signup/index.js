import React, { Component } from 'react';
import StyleSheetFactory from './styles';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native'
import Button from '../../../../components/button';
import { DEFUALT_THEME, DARK_THEME} from '../../../../global/config'
import Theme from '../../../../global/theme'
import {PopScreen} from '../../../../navigation/helper'
import {scaleModerate, scaleVertical} from '../../../../utils/scale'
import CustomizedTextInput from '../../../../components/textInput/container'

export default class SignUp extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header:null
  });
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
  getThemeImageSource = (theme) => (
    theme == DEFUALT_THEME ?
    require('../../../../global/assets/img/logo.png')
    : require('../../../../global/assets/img/logoDark.png')
);
renderImage = (styles) => (
  <Image style={styles.image} source={this.getThemeImageSource(this.props.theme)} />
);


  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    const {h1, baseColor,header6,primary3} = this.props.globalStyles.textStyle;
    const {clear} = this.props.globalStyles.buttonStyle;

    return (
      <View style={styles.screen}>
       <ScrollView
       keyboardShouldPersistTaps="handled"
       showsVerticalScrollIndicator={false}
      //  onStartShouldSetResponder={() => true}
      //  onResponderRelease={() => Keyboard.dismiss()}
       >
        <View style={{ alignItems: 'center' }}>
          {this.renderImage(styles)}
          <Text style={[h1, baseColor]}>Registration</Text>
        </View>
      <View style={styles.content}>
      <View>
          <CustomizedTextInput
          contentContainerStyle={{marginVertical:scaleVertical(10),padding:6}}
          placeholder='Name'
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor={Theme[this.props.theme].colors.control.background}
          borderColor={Theme[this.props.theme].colors.border.base}
          borderRadius={24}
          placeholderTextColor={baseColor.color}
          value={this.state.name}
          onChangeText={val => this.onChangeText('name', val)}
        />
        <CustomizedTextInput
          contentContainerStyle={{marginVertical:scaleVertical(10),padding:6}}
          placeholder='Email'
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor={Theme[this.props.theme].colors.control.background}
          borderColor={Theme[this.props.theme].colors.border.base}
          borderRadius={24}
          placeholderTextColor={baseColor.color}
          value={this.state.email}
          onChangeText={val => this.onChangeText('email', val)}
        />
        <CustomizedTextInput
          contentContainerStyle={{marginVertical:scaleVertical(10),padding:6}}
          placeholder='Password'
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor={Theme[this.props.theme].colors.control.background}
          borderColor={Theme[this.props.theme].colors.border.base}
          borderRadius={24}
          placeholderTextColor={baseColor.color}
          value={this.state.password}
          onChangeText={val => this.onChangeText('password', val)}
      />
      <CustomizedTextInput
        contentContainerStyle={{marginVertical:scaleVertical(10),padding:6}}
        placeholder='Confirm Password'
        autoCapitalize="none"
        autoCorrect={false}
        backgroundColor={Theme[this.props.theme].colors.control.background}
        borderColor={Theme[this.props.theme].colors.border.base}
        borderRadius={24}
        placeholderTextColor={baseColor.color}
        value={this.state.confirmpassword}
        onChangeText={val => this.onChangeText('cpassword', val)}
      />
        <Button style={styles.save}
          text='Sign Up'
          borderRadius={20}
          color={Theme[this.props.theme].colors.gradients.base[0]}
          style={[{width: 300},{height:50},baseColor]}
          onPress={this.signUp}
        />
      </View>

      <View style={styles.footer}>
      <View style={styles.textRow}>
        <Text style={[primary3, baseColor]}>Already have an account? </Text>
        <TouchableOpacity
        onPress={()=>this.props.navigation.goBack()}
        style={[clear]} >
        <Text style={[header6, baseColor]}>Sign in now</Text>
      </TouchableOpacity>
      </View>
    </View>
      </View>
       </ScrollView>
       </View>
      )

  }
}
