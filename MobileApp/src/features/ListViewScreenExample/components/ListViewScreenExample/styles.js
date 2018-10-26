import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../../../global/theme/default';

const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginTop:5,
        justifyContent:'center',

     },
     item:{
         borderRightWidth:10,
         borderRightColor:COLOR_PRIMARY,
         borderLeftWidth:10,
         height:30,
         borderRightColor:COLOR_PRIMARY,
         marginBottom:5,
         backgroundColor :'#e1e1e1'
     },

});

export default styles;