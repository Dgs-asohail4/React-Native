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
                flexDirection: 'row',
                padding: 16,
                alignItems: 'center',
              },
              avatar: {
                marginRight: 16,
              },
              separator: {
                flex: 1,
                height: StyleSheet.hairlineWidth,
                backgroundColor: theme.colors.border.base,
              },
        })
    }
};