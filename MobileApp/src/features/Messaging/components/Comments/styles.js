import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
              },
              container: {
                paddingLeft: 19,
                paddingRight: 16,
                paddingVertical: 12,
                flexDirection: 'row',
                alignItems: 'flex-start',
              },
              content: {
                marginLeft: 16,
                flex: 1,
              },
              contentHeader: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 6,
              },
              separator: {
                height: StyleSheet.hairlineWidth,
                backgroundColor: theme.colors.border.base,
              },
        })
    }
};