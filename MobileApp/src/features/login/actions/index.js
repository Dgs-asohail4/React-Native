import * as api from '../../../api/login/login'
import {types} from '../constants'
import { SUCCESS_PREFIX, ERROR_PREFIX } from '../../../api/constant';

export function loginAction(credentials) {
    return dispatch => {
        return dispatch(api.doLogin(credentials, types.LOGIN))
    }
}

export function requireAuthentication(){
    return dispatch => {
        return dispatch(api.requireLogin(types.REQUIRE_LOGIN))
    }
}

export function setUser(user){
    return {type:types.SET_USER, payload:user}
}