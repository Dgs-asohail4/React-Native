import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
              },
              title: {
                marginBottom: 5,
              },
              container: {
                backgroundColor: theme.colors.screen.scroll,
                paddingVertical: 8,
                paddingHorizontal: 14,
              },
              card: {
                marginVertical: 8,
              },
              time: {
                marginTop: 5,
              },
        })
    }
};