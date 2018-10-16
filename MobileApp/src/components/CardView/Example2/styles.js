import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


    viewStyleOverLay: {
        height: 250, 
        flexDirection: 'row', 
        marginBottom : 0,
        flexWrap : 'wrap'
    },
    imageStyle: {
        height: 250, 
        position: 'absolute',
        width : '100%'
        
    },
    textStyle: {
        flex: 1, 
        backgroundColor: 'transparent', 
        alignSelf: 'flex-end',
        
    },
    overlayTitleStyle: {   
        
        color: 'white',
        fontSize: 20,
        padding : 10,
        paddingBottom : 0
        // margin: 6 
    },
    overlaySubtitleStyle: {   
        padding : 10,
        color: 'white', 
        // margin: 6
    },
    overlayIconViewStyle : {
        flexDirection:'row',
        justifyContent : 'flex-start',
        paddingLeft : 10
        
    },
    row : {
        flexDirection:'row',
        
    },
    overlayIconStyle : {
        color : 'white' 
    },
    
    buttonTextStyle : {
        marginLeft : 5,
        marginRight : 15,
        paddingBottom : 5,
        color : 'white'
        
    },
    
 



});

export default styles;