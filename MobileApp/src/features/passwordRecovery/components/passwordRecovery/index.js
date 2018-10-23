import React, { Component } from 'react';
import { Text,KeyboardAvoidingView,Keyboard,View,Image,StyleSheet,TextInput } from 'react-native';
import Button from '../../../../components/button';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import {goBack} from '../../../../navigation/helper'
import {scaleVertical} from '../../../../utils/scale';
import {scaleModerate} from '../../../../utils/scale'
import { DEFUALT_THEME } from '../../../../global/config';

export default class PasswordRecovery extends Component {
  static navigationOptions = {
    header: null,
  };

  onSendButtonPressed = () => {
    this.props.navigation.goBack();
  };
  getThemeImageSource = (theme) => (
    theme === DEFUALT_THEME ?
      require('../../../../global/assets/img/logo.png') : require('../../../../global/assets/img/logoDark.png')
  );

  renderImage = (styles) => (
    <Image style={styles.image} source={this.getThemeImageSource(this.props.theme)} />
  );
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {h1, baseColor,rounded,secondary5 ,secondaryColor,center} = this.props.globalStyles.textStyle;

    return (
      <KeyboardAvoidingView
         // behavior='position'
          style={styles.screen}
          onStartShouldSetResponder={() => true}
          onResponderRelease={() => Keyboard.dismiss()}>
          <View style={styles.header}>
            {this.renderImage(styles)}
            <Text style={[h1, baseColor]}>Password Recovery</Text>
          </View>
          <View style={styles.content}>
        <TextInput style={styles.input} placeholder='Email' />
        <Text style={[secondary5, secondaryColor, center]}>
            Enter your email below to receive your password reset instructions
        </Text>
      </View>
      <Button
       style={styles.save}
        text='SEND'
        borderRadius={20}
        color={Theme[this.props.theme].colors.gradients.base[0]}
        style={[{width: 350},{height:50},baseColor]}
        onPress={this.onSendButtonPressed}
      />
      </KeyboardAvoidingView>
    );
  }
}