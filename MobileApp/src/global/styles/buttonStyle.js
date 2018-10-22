
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
              justifyContent:'center',
              backgroundColor:theme.colors.button.back,
          }, //container : {flexDirection:'column',margin:8}
          tile:{
              borderRadius:0,
              backgroundColor:'transparent',
              borderWidth:0.5,
              justifyContent:'center',
              borderColor:theme.colors.border.base,
          }, //container: {flexDirection:'column'}
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

