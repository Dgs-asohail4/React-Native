import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(theme){
        return StyleSheet.create({
            searchSection: {
                flexDirection: 'row',
                margin:20
            },
            searchSectionWoIcon: {
                marginRight : 13,
                alignItems : 'center',
                padding:15,
            },
            searchSectionLeft: {
                paddingRight : 0,
                paddingLeft : 46,
            },
            searchIcon: {
                alignItems : 'center',
                padding:15,
            },
            searchIconRight: {
                alignItems : 'center',
                padding:15,
            },
            input:{
                flex:1,
                color:inputColor,
                paddingRight : 46,
                fontSize:18
            },
            textInvalid: {
                borderColor : 'red'
            },
            rounded:{
                fontSize:theme.fonts.sizes.h6,
                borderWidth:1
            }
        });
    }
}