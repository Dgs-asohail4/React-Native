import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                backgroundColor: theme.colors.screen.scroll,
                paddingHorizontal: 14,
                paddingVertical: 8,
              },
              card: {
                marginVertical: 8,
              },
              footer: {
                paddingTop: 16,
              },
              time: {
                marginTop: 5,
              },
        })
    }
};