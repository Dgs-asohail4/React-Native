import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
          wrapper: {
            flex: 1,
          },
          container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 18,
          },
          text: {
            flexDirection: 'row',
          },
          icon: {
            width: 35,
          },
        })
    }
};