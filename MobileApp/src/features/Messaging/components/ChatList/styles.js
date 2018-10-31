import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
              },
              searchContainer: {
                backgroundColor: theme.colors.screen.bold,
                paddingHorizontal: 16,
                paddingVertical: 10,
                height: 60,
                alignItems: 'center',
              },
              container: {
                paddingLeft: 19,
                paddingRight: 16,
                paddingBottom: 12,
             //   paddingTop: 7,
                flexDirection: 'row',
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