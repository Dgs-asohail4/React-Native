import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.screen.bold,
              },
              welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
              },
              instructions: {
                textAlign: 'center',
                color: theme.colors.text.base,
                marginBottom: 5,
              }
        })
    }
};