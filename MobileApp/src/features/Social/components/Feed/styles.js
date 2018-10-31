import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                backgroundColor: theme.colors.screen.scroll,
                paddingVertical: 8,
                paddingHorizontal: 10,
              },
              card: {
                marginVertical: 8,
              },
              avatar: {
                marginRight: 16,
              },
        })
    }
};