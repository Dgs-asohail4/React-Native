import { StyleSheet } from 'react-native';
import {scaleVertical} from '../../../../utils/scale';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            input: {
                width: 350,
                height: 55,
                //backgroundColor: '#42A5F5',
                margin: 10,
                borderColor:'grey',
                borderWidth:1,
                padding: 8,
                color: 'white',
                borderRadius: 24,
                fontSize: 18,
                fontWeight: '500',
              },
            screen: {
                flex: 1,
                paddingHorizontal: 16,
                paddingVertical: scaleVertical(24),
                justifyContent: 'space-between',
                backgroundColor: theme.colors.screen.base,
              },
              header: {
                alignItems: 'center',
              },
              image: {
                marginVertical: scaleVertical(27),
                height: scaleVertical(77),
                resizeMode: 'contain',
              },
              content: {
                alignItems: 'center',
              },
        })
    }
};