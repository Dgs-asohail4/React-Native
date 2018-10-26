import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            images: {
                flexDirection: 'row',
                paddingHorizontal: 0.5,
              },
              header: {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
        })
    }
};