import { StyleSheet } from 'react-native';


export const getBaseStyle = (theme) => ({
    base:{
        container: {
            width: 52,
            height: 32,
            overflow: 'hidden',
            justifyContent: 'center',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: theme.colors.border.secondary,
          },
          thumb: {
            position: 'absolute',
            height: 32,
            width: 32,
            borderWidth: 1,
            borderColor: theme.colors.border.secondary,
            backgroundColor: theme.colors.screen.base,
            borderRadius: 16,
          }
    }
});

export const getSelectedStyle = (theme) => ({
    selected:{
        thumb: {
            borderColor: theme.colors.primary,
        },
        container: {
        borderColor: theme.colors.primary,
        },
    }
});

export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.crea
        te({
        })
    }
};