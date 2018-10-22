
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
          },
          social:{
            height: scale(62),
            width: scale(62),
            borderRadius: scale(31),
            borderColor: theme.colors.border.accent,
            borderWidth: 1,
            backgroundColor: theme.colors.control.background,
          }
      });
      return buttonStyle;
  }
}

