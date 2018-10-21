
import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale'
export default class StyleSheetFactory {
  static getSheet(theme) {
      const buttonStyle = StyleSheet.create({
          basic:{
              alignSelf:'auto'
          },
          square:{
              borderRadius:3,
              backgroundColor:theme.colors.button.back,
          }
      });
      return buttonStyle;
  }
}

