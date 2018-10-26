import { StyleSheet } from 'react-native';
import {scaleVertical} from '../../../../utils/scale';
export default class StyleSheetFactory {
  static getSheet(theme) {
 return StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        //backgroundColor: '#42A5F5',
        margin: 10,
        borderColor:'grey',
        borderWidth:1,
        padding: 8,
        color: 'white',
        borderRadius: 24,
        fontSize: 18,
        fontWeight: '500',
      },
      screen: {
        padding: 16,
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: theme.colors.screen.base,
      },
      image: {
        marginBottom: 10,
        height: scaleVertical(77),
        resizeMode: 'contain',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
     
      content: {
        justifyContent: 'space-between',
      },
      save: {
        marginVertical: 20,
      },
      buttons: {
        flexDirection: 'row',
        marginBottom: 24,
        marginHorizontal: 24,
        justifyContent: 'space-around',
      },
      footer: {
        justifyContent: 'flex-end',
      },
      textRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
   
    
});
  }
}
