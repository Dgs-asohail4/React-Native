import { StyleSheet } from 'react-native';
import {scaleVertical, scale} from '../../utils/scale'
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            icon: {
                fontSize: 24,
              },
              button: {
                 top:18,
                 right:10,
              },

              input:{
                width:scale(250),
                height:60,
                paddingHorizontal:10,
                backgroundColor:theme.colors.control.base,
                borderWidth:1,
                borderRadius:20,
                borderColor:theme.colors.border.base,
                marginVertical:scaleVertical(4),

              },

              container:{
                backgroundColor: theme.colors.control.background
              },
              label: {
                color:theme.colors.input.label,
                position: 'absolute',
                right: 0,
            }
        })
    }
};