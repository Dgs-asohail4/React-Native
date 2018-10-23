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
      content: {
        justifyContent: 'space-between',
      },
      button: {
        borderColor: theme.colors.border.solid,
      },
      buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
        marginHorizontal: 24,
        justifyContent: 'space-around',
      },
      footer: {},
      image:{
        height: scaleVertical(77),
        resizeMode: 'contain',
      },
      header: {
        paddingBottom: scaleVertical(10),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      screen: {
        padding: scaleVertical(16),
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.screen.base,
      },
      textRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
  });
  }
}
