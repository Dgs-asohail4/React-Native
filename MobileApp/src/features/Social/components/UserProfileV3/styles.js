import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
              },
              header: {
                alignItems: 'center',
                paddingTop: 25,
                paddingBottom: 17,
              },
              userInfo: {
                flexDirection: 'row',
                paddingVertical: 18,
              },
              bordered: {
                borderBottomWidth: 1,
                borderColor: theme.colors.border.base,
              },
              section: {
                flex: 1,
                alignItems: 'center',
              },
              space: {
                marginBottom: 3,
              },
              separator: {
                backgroundColor: theme.colors.border.base,
                alignSelf: 'center',
                flexDirection: 'row',
                flex: 0,
                width: 1,
                height: 42,
              },
              buttons: {
                flexDirection: 'row',
                paddingVertical: 8,
              },
              button: {
                marginTop: 18,
                alignSelf: 'center',
                width: 140,
              },
        })
    }
};