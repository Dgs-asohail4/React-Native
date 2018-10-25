import { StyleSheet } from 'react-native';

export const getBase = (theme) => ({
    base:{
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flex: 1,
          },
          section: {
            justifyContent: 'center',
            flexDirection: 'row',
            flex: 1,
          },
          icon: {
            fontSize: 20,
          },
          label: {
            marginLeft: 8,
            alignSelf: 'flex-end',
          },
    }
});

export const getLeftAligned = (theme) => ({
    leftAligned:{
        section: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          label: {
            color: theme.colors.text.inverse,
          },
          icon: {
            color: theme.colors.text.inverse,
          },
    }
})

export const getSpace = (theme)=>({
    space: {
        container: {
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        },
        section: {
          flex: -1,
        },
      },
})
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
        })
    }
};