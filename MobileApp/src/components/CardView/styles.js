import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    viewStyle: {
        
        width: '90%',
        height: 200, 
        flexDirection: 'row', 
        margin: 24,
        marginBottom : 0,
    },
    imageStyle: {
        width: '100%', 
        height: 200, 
        position: 'absolute'
    },
    textStyle: {
        flex: 1, 
        backgroundColor: 'transparent', 
        alignSelf: 'flex-end'
    },
    titleStyle: {   
        color: 'white',
        fontSize: 20,
        padding : 10,
        paddingBottom : 0,
        // margin: 6 
    },
    subtitleStyle: {   
        padding : 10,
        paddingTop : 0,
        color: 'white',
        // margin: 6
    },
    buttonStyle: {   
        // width: '90%',
        
        // height: 200,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingHorizontal:10,
        alignSelf:'baseline'
    },
    buttonTextStyle : {
       // flex : 1
       marginLeft:5
    },

    // viewStyle: {
    //     width: '90%',
    //     height: 200, 
    //     flexDirection: 'row', 
    //     margin: 24,
    //     marginBottom : 0,
    // },
    // imageStyle: {
    //     width: '100%', 
    //     height: 200, 
    //     position: 'absolute'
    // },
    // textStyle: {
    //     flex: 1, 
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    //     alignSelf: 'flex-start'
    // },
    // titleStyle: {   
        
    //     color: 'white',
    //     fontSize: 20,
    //     padding : 10,
    //     paddingBottom : 0
    //     // margin: 6 
    // },
    // subtitleStyle: {   
    //     padding : 10,
    //     color: 'white', 
    //     // margin: 6
    // },
    // buttonStyle: {   
    //     width: '90%',
    //     height: 200, 
    //     flexDirection: 'row', 
    //     padding: 15,
    //     paddingLeft : 24,
    // },
    // buttonTextStyle : {
    //     marginLeft : '1.75%',
    //     marginRight :'15%',
    // },

    



});

export default styles;