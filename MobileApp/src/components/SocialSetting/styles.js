import { StyleSheet } from 'react-native';

export class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 14,
              },
              left: {
                flexDirection: 'row',
                alignItems: 'center',
              },
              icon: {
                width: 35,
                alignItems: 'center',
              },
        })
    }
};