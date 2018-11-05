import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                backgroundColor: theme.colors.screen.bold,
                paddingVertical: 20,
                paddingHorizontal: 14,
              },
              card: {
                paddingHorizontal: 8,
                marginBottom:20,
                backgroundColor:theme.colors.screen.base
              },
              avatar: {
                marginRight: 16,
                marginVertical:10
              },
        })
    }
};