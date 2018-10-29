import { StyleSheet } from 'react-native';
import {scale,scaleVertical} from '../../../../utils/scale';
import {UIConstants} from '../../../../global/config/index';
export default class StyleSheetFactory {
    static getSheet(theme) {
        return StyleSheet.create({
            root: {
                backgroundColor: theme.colors.screen.base,
              },
              list: {
                marginHorizontal: 16,
              },
              card: {
                marginVertical: 8,
              },
              background: {
                borderRadius: 7,
                paddingHorizontal:10
              },
              cardNoContainer: {
                flexDirection: 'row',
              },
              cardNo: {
                marginHorizontal: 8,
              },
              cardPlaceholder: {
                paddingTop: 4,
              },
              date: {
                marginTop: scaleVertical(20),
              },
              footer: {
                marginTop: 8,
                //marginBottom: scaleVertical(16),
               // alignItems: 'center',
              },
              button: {
                height: 56,
                width: 56,
              },
              popup: {
                backgroundColor: theme.colors.screen.base,
                marginTop: scaleVertical(70),
                marginHorizontal: 37,
                borderRadius: 7,
              },
              popupOverlay: {
                backgroundColor: theme.colors.screen.overlay,
                flex: 1,
                marginTop: UIConstants.HeaderHeight,
              },
              popupContent: {
                alignItems: 'center',
                margin: 16,
              },
              popupHeader: {
                marginBottom: scaleVertical(45),
              },
              popupButtons: {
                marginTop: 15,
                flexDirection: 'row',
                borderTopWidth: 1,
                borderColor: theme.colors.border.base,
              },
              popupButton: {
                flex: 1,
                marginVertical: 16,
                justifyContent:'center'
              },
              separator: {
                backgroundColor: theme.colors.border.base,
                width: 1,
              },
        })
    }
};