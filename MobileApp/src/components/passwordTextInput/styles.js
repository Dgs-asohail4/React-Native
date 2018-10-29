import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            icon: {
                fontSize: 24,
              },
              button: {
                right: 17,
              },
        })
    }
};