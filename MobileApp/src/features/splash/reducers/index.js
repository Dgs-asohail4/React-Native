
import * as actionTypes from '../constants'

import TextStyleFactory from '../../../global/styles/textStyle'
import ButtonStyleFactory from '../../../global/styles/buttonStyle'
import { DEFUALT_THEME, DARK_THEME } from '../../../global/config';
import Theme from '../../../global/theme'
const DEFAULT_STATE = {
    title:"Hello World",
    globalTheme:{
        textStyle: TextStyleFactory.getSheet(Theme[DEFUALT_THEME]),
        buttonStyle: ButtonStyleFactory.getSheet(Theme[DEFUALT_THEME])
    }
}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case actionTypes.UPDATE_GLOBAL_STYLES:
            return {...state, globalTheme:action.payload};
        default:
            return state;
    }
}
