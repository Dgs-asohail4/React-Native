import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../../../global/theme/default';

export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                backgroundColor: theme.colors.screen.base,
             },
             item: {
              height: 80,
              justifyContent: 'center',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: theme.colors.border.base,
              paddingHorizontal: 16,
            },
            list: {
              backgroundColor: theme.colors.screen.base,
            },
            screen: {
              flexDirection: 'row',
              alignItems: 'center',
            },
            icon: {
              width: 34,
              textAlign: 'center',
              marginRight: 16,
            },
             text: {
                paddingHorizontal: 16.5,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.border.base,
              },
              list: {
                backgroundColor: theme.colors.screen.base,
              },
              emptyContainer: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.colors.screen.base,
              },

        })
    }
  }
