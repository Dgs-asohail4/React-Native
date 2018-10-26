import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                flexDirection: 'row',
                marginHorizontal: 5,
                marginVertical: 10,
              },
            dot: {
                height: 5.5,
                width: 5.5,
                borderRadius: 3,
                backgroundColor: theme.colors.text.base,
                marginHorizontal: 2.5,
            },
        })
    }
};