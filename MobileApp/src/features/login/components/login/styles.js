import { StyleSheet } from 'react-native';
import {scaleVertical} from '../../../../utils/scale';
export default class StyleSheetFactory {
  static getSheet(theme) {
  return StyleSheet.create({
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 24
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      button:{
        marginHorizontal: 14,
      },
      buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
      },
      screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.screen.base,
      }
  });
  }
}
