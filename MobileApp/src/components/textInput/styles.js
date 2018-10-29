import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(theme){
        return StyleSheet.create({
            searchSection: {
                flexDirection: 'row',
                marginVertical:10,
                marginHorizontal:5,
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
                padding:20,
                fontSize:18,

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