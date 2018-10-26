import { StyleSheet } from 'react-native';
import {scale, scaleVertical} from '../../../../utils/scale'
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
                flex: 1,
                paddingHorizontal: scale(72),

              },
              image: {
                height: scaleVertical(160),
              },
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: scaleVertical(20),
              },
        })
    }
};