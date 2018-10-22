import React, { Component } from 'react';
import { Text, View, StatusBar, Image, Platform} from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import { DARK_THEME, DEFUALT_THEME } from '../../../../global/config';
import Button from '../../../../components/button'

import TextStyleFactory from '../../../../global/styles/textStyle'
import ButtonStyleFactory from '../../../../global/styles/buttonStyle'

export default class Themes extends Component {
  static navigationOptions = {
    title: 'Theme'.toUpperCase(),
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.theme !== this.props.theme) {
        const style = {
          textStyle : TextStyleFactory.getSheet(Theme[this.props.theme]),
          buttonStyle: ButtonStyleFactory.getSheet(Theme[this.props.theme])
        }
        this.props.UpdateGlobalTheme(style);
    }
  }

  onLightThemeApplyButtonPressed = () => {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Theme[DEFUALT_THEME].colors.screen.base);
    }
    this.props.changeTheme(DEFUALT_THEME)
  };

  onDarkThemeApplyButtonPressed = () => {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Theme[DARK_THEME].colors.screen.base);
    }
    this.props.changeTheme(DARK_THEME)
  };

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header1, baseColor, center, regular, primary} = this.props.globalStyles.textStyle;
    return (
      <View style={styles.root}>
      <View style={styles.container}>
        <Text style={[header1,center, regular, primary, baseColor]}>Light Theme</Text>
        <Image style={styles.image} source={require('../../../../global/assets/img/lightThemeImage.png')} />
        <Button
          text='APPLY'
          style={{width:350, borderRadius:5}}
          color={Theme[this.props.theme].colors.gradients.base[0]}
          onPress={this.onLightThemeApplyButtonPressed}
        />
      </View>
      <View style={styles.container}>
        <Text style={[header1,center, regular, primary, baseColor]}>Dark Theme</Text>
        <Image style={styles.image} source={require('../../../../global/assets/img/darkThemeImage.png')} />
        <Button
          text='APPLY'
          style={{width:350, borderRadius:5}}
          color={Theme[this.props.theme].colors.gradients.base[0]}
          onPress={this.onDarkThemeApplyButtonPressed}
        />
      </View>
    </View>
    );
  }
}