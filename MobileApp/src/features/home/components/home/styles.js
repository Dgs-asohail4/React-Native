import { StyleSheet } from 'react-native';
const paddingValue = 8;
export default class StyleSheetFactory {
  static getSheet(theme) {
      return StyleSheet.create({
        root: {
            backgroundColor: theme.colors.screen.scroll,
            padding: paddingValue,
        },
        rootContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        icon: {
            marginBottom: 16
        }
      })
  }
}
