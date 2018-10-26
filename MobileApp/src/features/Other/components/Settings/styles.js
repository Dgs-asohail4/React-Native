import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                backgroundColor: theme.colors.screen.base,
              },
              header: {
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
                justifyContent: 'space-between',
                paddingHorizontal: 17.5,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.border.base,
                alignItems: 'center',
              },
              rowButton: {
                flex: 1,
                paddingVertical: 24,
              },
              switch: {
                marginVertical: 14,
              },
        })
    }
};