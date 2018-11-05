
import {types} from '../constants'
import { SUCCESS_PREFIX, ERROR_PREFIX } from '../../../api/constant';

const DEFAULT_STATE = {
    title:"Hello World",
    login:false,
    loading : false,
    error:false,
    user:'chad',
    errorMessage: "",
    payload :{}
}
export default function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.LOGIN:
            return {...state, loading: true, login:false, erorr:false, errorMessage: ""}
        case types.LOGIN + SUCCESS_PREFIX:
            return {...state, loading:false, login:true, error:false, errorMessage:"", payload:action.payload}
        case types.LOGIN + ERROR_PREFIX:
            return {...state, loading:false,login:false,error:true, errorMessage:""}
        case types.SET_USER:
            return {...state, user:action.payload}
        default:
            return state;
    }
}
