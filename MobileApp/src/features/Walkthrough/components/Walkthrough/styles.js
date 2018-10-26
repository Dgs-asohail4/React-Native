import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            screen: {
                backgroundColor: theme.colors.screen.base,
                paddingVertical: 28,
                alignItems: 'center',
                flex: 1,
              },
              button: {
                marginTop: 25,
                marginHorizontal: 16,
              },
              text: {
                marginTop: 20,
              },
              text2: {
                textAlign: 'center',
                marginTop: 20,
                marginHorizontal: 30,
              },
              container: {
                backgroundColor: theme.colors.screen.base,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              },
        })
    }
};