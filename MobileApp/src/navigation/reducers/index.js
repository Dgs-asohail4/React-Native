import * as actionTypes from '../constants'

const DEFAULT_STATE = {scene:"app.home"}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case actionTypes.CHANGE_SCENE:
            return {...state, scene:action.payload}
        default:
            return state;
    }
}
