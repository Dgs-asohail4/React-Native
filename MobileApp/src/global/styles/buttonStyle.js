
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
      });
      return buttonStyle;
  }
}

