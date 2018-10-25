import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
              },
              header: {
                backgroundColor: theme.colors.screen.neutral,
                paddingVertical: 25,
              },
              section: {
                marginVertical: 25,
              },
              heading: {
                paddingBottom: 12.5,
              },
              row: {
                flexDirection: 'row',
                paddingHorizontal: 17.5,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.border.base,
                alignItems: 'center',
              },
              button: {
                marginHorizontal: 16,
                marginBottom: 32,
              },
        })
    }
};