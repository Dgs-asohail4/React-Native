import * as actionTypes from '../constants'
import {getScene} from '../reducers'

export const changeScene = (scene) => {
    return {type:actionTypes.CHANGE_SCENE, payload:scene}
}


