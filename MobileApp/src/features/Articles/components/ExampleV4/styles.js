import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
          container: {
            backgroundColor: theme.colors.screen.scroll,
            paddingVertical: 8,
            paddingHorizontal: 14,
          },
          content:{

          },
          img:{

          },
          card: {
            marginVertical: 8,
          },
          post: {
            marginTop: 13,
          },
    }
        )}
};