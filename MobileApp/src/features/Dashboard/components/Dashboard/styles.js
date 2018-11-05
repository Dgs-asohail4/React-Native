import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            screen: {
                backgroundColor: theme.colors.screen.scroll,
                paddingHorizontal: 15,
              },
              statItems: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              },
              statItemContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 3,
                paddingHorizontal: 10,
                paddingVertical: 10,
              },
              statItemIcon: {
                alignSelf: 'center',
                marginLeft: 10,
                color: 'white',
              },
              statItemValue: {
                color: 'white',
              },
              statItemName: {
                color: 'white',
              },
              chartBlock: {
                padding: 15,
                marginBottom: 15,
                justifyContent: 'center',
              },
        })
    }
};