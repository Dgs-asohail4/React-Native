import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    parentGrey : {
        height:250, 
        borderWidth:1, 
        margin : 15,
    },
    viewStyleGrey: {
        height: 210, 
        flexDirection: 'row', 
        
    },
    imageStyleGrey: {
        width:'100%',
        height : 210,
        position: 'absolute'
    },
    textStyleGrey: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        alignSelf: 'flex-start'
    },
    titleStyleGrey: {   
        
        color: 'white',
        fontSize: 20,
        padding : 10,
        paddingBottom : 0
    },
    subtitleStyleGrey: {   
        padding : 10,
        color: 'white', 
    },
    buttonStyleGrey: {   
        flexDirection: 'row',
        marginLeft:15,
        justifyContent : 'space-between' 
    },
    rowGrey:{
        flexDirection:'row',
        marginTop : 10
    },
    buttonTextStyleGrey : {
        marginLeft : 5,
        marginRight :30,
    },



});

export default styles;