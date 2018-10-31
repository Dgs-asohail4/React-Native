import { StyleSheet } from 'react-native';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
              },
              container: {
                padding: 16,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: theme.colors.border.base,
                alignItems: 'flex-start',
              },
              avatar: {},
              text: {
                marginBottom: 5,
              },
              content: {
                flex: 1,
                marginLeft: 16,
                marginRight: 0,
              },
              mainContent: {
                marginRight: 60,
              },
              img: {
                height: 50,
                width: 50,
                margin: 0,
              },
              attachment: {
                position: 'absolute',
                right: 0,
                height: 50,
                width: 50,
              },
        })
    }
};