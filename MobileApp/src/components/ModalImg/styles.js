import { StyleSheet } from 'react-native';

export const getBasicStyle = (theme) => ({
    basic:{
        img: {
            margin: 1.5,
          },
          modal: {
            backgroundColor: theme.colors.screen.base,
          },
          footer: {
            backgroundColor: theme.colors.screen.base,
            height: 50,
          },
          header: {
            backgroundColor: theme.colors.screen.base,
            paddingBottom: 6,
          },
    }
})
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
        })
    }
};