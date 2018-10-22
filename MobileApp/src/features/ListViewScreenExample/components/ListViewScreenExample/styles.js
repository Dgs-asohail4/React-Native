import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../../../global/theme/default';

export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            container: {
                marginHorizontal:10,
                marginTop:5
        
             },
             item:{
                
                 height:50,
                 marginBottom:30,
                 marginTop:20,
                 borderBottomWidth:0.2,
                 
                //  backgroundColor :'#e1e1e1'
             },
             text: {
                paddingHorizontal: 16.5,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: theme.colors.border.base,
              },
              list: {
                backgroundColor: theme.colors.screen.base,
              },
              emptyContainer: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.colors.screen.base,
              },
            
        })
    }
  }
