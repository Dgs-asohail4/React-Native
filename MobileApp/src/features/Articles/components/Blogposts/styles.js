import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                backgroundColor: theme.colors.screen.scroll,
                paddingVertical: 8,
                paddingHorizontal: 14,
              },
              footerRight:{
                textAlign:'right'
              },
              card: {
                marginVertical: 8,
              },
              userInfo: {
                flexDirection: 'row',
                alignItems: 'center',
              },
              avatar: {
                marginRight: 17,
              },
        })
    }
};