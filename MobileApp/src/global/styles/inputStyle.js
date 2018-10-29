
import {StyleSheet} from 'react-native';
import {scale, scaleVertical} from '../../utils/scale'

const getBasic = (theme) => ({
    basic:{
        input: {
            //fontFamily: theme => theme.fonts.family.bold,
            color: theme => theme.colors.text.base,
         //   placeholderTextColor: theme => theme.colors.input.placeholder,
        },
        container:{
            backgroundColor: theme => theme.colors.control.background,
        },
        label:{
            color: theme => theme.colors.input.label,
        }

    }
});

const getRouded = (theme) => ({
    rounded:{
        container:{
            fontSize: theme => theme.fonts.sizes.h6,
            borderWidth: 1,
            borderBottonWidth: 1,
        },
        input: {
      //      placeholderTextColor: theme => theme.colors.input.text,
            marginVertical:
               scaleVertical(4),

        },
        label:{}
    }
});


const getRight = (theme) => ({
    right:{
        input: {
            textAlign: 'right',
            marginTop: {
                ios: scaleVertical(18),
                android: scaleVertical(11),
            },
        },
        label: {
            fontFamily: theme => theme.fonts.family.light,
            fontSize: theme => theme.fonts.sizes.small,
        },
        container: {
            marginVertical: 4,
            backgroundColor: 'transparent',
        },
    }
});

const getRow = (theme)=>({
    row:{
        input: {
            marginVertical: 0,
            marginHorizontal: 0,
            marginTop: 0,
            paddingTop: {
                ios: 2,
                android: 0,
            },
            paddingBottom: 0,
            textAlignVertical: 'center',
            includeFontPadding: false,
          //  fontFamily: theme => theme.fonts.family.light,
            //fontSize: theme => theme.fonts.sizes.small,
        },
        container: {
            flex: 1,
            backgroundColor: theme => theme.colors.input.background,
            marginVertical: 0,
            borderRadius: 20,
            paddingHorizontal: 16,
        }
    }
});

const getIconRight = (theme)=> ({
    iconRight:{
        label: {
            position: 'absolute',
            right: 0,
        },
        input: {
            marginRight: scale(46),
        },
        container:{}
    }
});

const getSticker = (theme) =>({
    sticker:{
        input: {
            marginHorizontal: 14,
        },
        container: {
            justifyContent: 'center',
            paddingHorizontal: 0,
        },
        label: {
            position: 'absolute',
            right: 0,
        },
    }
});

export default getTextInputStyles = (theme) => ({
    ...getBasic(theme),
    ...getIconRight(theme),
    ...getRouded(theme),
    ...getSticker(theme),
    ...getRow(theme),
    ...getRight(theme)
})