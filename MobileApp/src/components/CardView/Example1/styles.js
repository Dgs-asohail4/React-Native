import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container : {
        height:250, 
        borderWidth:1, 
        margin : 8,
        paddingBottom:20,
        
    },
    header: {
        height: 210, 
        flexDirection: 'row', 
        
    },
    img: {
        width:'100%',
        height : 210,
        position: 'absolute'
    },
    content: {
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
    footer: {   
        flexDirection: 'row',
        marginHorizontal:10,
       // justifyContent : 'space-between' 
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