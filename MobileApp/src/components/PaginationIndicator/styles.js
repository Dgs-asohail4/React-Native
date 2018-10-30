import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                flexDirection: 'row',
              },
              base: {
                width: 8,
                height: 8,
                borderRadius: 5,
                borderColor: theme.colors.brand,
                borderWidth: 1,
                marginHorizontal: 5,
              },
              selected: {
                backgroundColor: theme.colors.brand,
              },
        })
    }
};