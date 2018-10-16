import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    viewStyle : {
        borderColor : 'black',
        borderWidth : 1,
        margin : 15,
    },


    titleStyle: {   
        
        color: 'black',
        fontSize: 20,
        padding : 10,
        paddingBottom : 0
        // margin: 6 
    },

    headerSubtitleStyle: {    
        paddingTop :0,
        padding : 10,
        color: 'black', 
    },

    imageWithHeader: {
        width:'100%',
        height : 175
      //  flexDirection: 'row',   
    },

    footerStyle: {
        paddingTop : 15,
        paddingBottom : 10,
        flexDirection:'row',
        justifyContent : 'space-around',
    },
    row : {
        flexDirection:'row',
    },
    iconStyle : {
        paddingLeft : 5,
        color:'red',
    },
    buttonTextStyleFooter : {
        marginLeft : 2.5,
        marginRight : 15,
        paddingBottom : 5,
        color : 'black'
        
    },

    
    

    
    
    
    
    


});

export default styles;