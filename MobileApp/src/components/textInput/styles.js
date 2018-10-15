import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

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
    textInvalid: {   
        borderColor : 'red'
    },


});

export default styles;