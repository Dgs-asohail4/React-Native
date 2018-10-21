
import * as actionTypes from '../constants'

const DEFAULT_STATE = {
    title:"Hello World",
    globalTheme:{}
}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case actionTypes.UPDATE_GLOBAL_STYLES:
            return {...state, globalTheme:action.payload};
            break
        default:
            return state;
    }
}
