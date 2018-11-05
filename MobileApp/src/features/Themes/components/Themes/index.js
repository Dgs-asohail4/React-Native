import React, { Component } from 'react';
import { Text, View, StatusBar, Image, Platform} from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import { DARK_THEME, DEFUALT_THEME } from '../../../../global/config';
import Button from '../../../../components/button'
import GradientButton from '../../../../components/GradientButton/container'
import GlobalStyle from '../../../../global/styles'

export default class Themes extends Component {
  static navigationOptions = {
    title: 'Theme'.toUpperCase(),
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.theme !== this.props.theme) {
        const style = GlobalStyle(this.props.theme)
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
    const {header4, baseColor, center, regular, primary} = this.props.globalStyles.textStyle;
    return (
      <View style={styles.root}>
      <View style={styles.container}>
        <Text style={[header4,center, regular, primary, baseColor,{marginVertical:10}]}>Light Theme</Text>
        <Image style={styles.image} source={require('../../../../global/assets/img/lightThemeImage.png')} />
        <GradientButton
          text='APPLY'
          colors={Theme[this.props.theme].colors.gradients.base}
          onPress={this.onLightThemeApplyButtonPressed}
        />
      </View>
      <View style={styles.container}>
        <Text style={[header4,center, regular, primary, baseColor,{marginVertical:10}]}>Dark Theme</Text>
        <Image style={styles.image} source={require('../../../../global/assets/img/darkThemeImage.png')} />
        <GradientButton
          text='APPLY'
          colors={Theme[this.props.theme].colors.gradients.base}
          onPress={this.onDarkThemeApplyButtonPressed}
        />
      </View>
    </View>
    );
  }
}