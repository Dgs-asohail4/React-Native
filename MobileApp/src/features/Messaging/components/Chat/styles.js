import { StyleSheet } from 'react-native';
import {scale} from '../../../../utils/scale'
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            header: {
                alignItems: 'center',
              },
              input:{
                backgroundColor:theme.colors.control.background,
                borderRadius:15,
                padding:5,
                width:300,
              },
              avatar: {
                marginRight: 16,
              },
              container: {
                flex: 1,
                backgroundColor: theme.colors.screen.base,
              },
              list: {
                paddingHorizontal: 17,
              },
              footer: {
                flexDirection: 'row',
                minHeight: 60,
                padding: 10,
                backgroundColor: theme.colors.screen.alter,
              },
              item: {
                marginVertical: 14,
                flex: 1,
                flexDirection: 'row',
              },
              itemIn: {},
              itemOut: {
                alignSelf: 'flex-end',
              },
              balloon: {
                maxWidth: scale(250),
                paddingHorizontal: 15,
                paddingTop: 10,
                paddingBottom: 15,
                borderRadius: 20,
              },
              time: {
                alignSelf: 'flex-end',
                margin: 15,
              },
              plus: {
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginRight: 7,
              },
              send: {
                justifyContent:'center',
                borderRadius:50,
                alignItems:'center',
                borderColor:theme.colors.border.base,
                backgroundColor:theme.colors.gradients.base[0],
                width: 40,
                height: 40,
                marginLeft: 10,
              },
        })
    }
};