import { combineReducers } from 'redux';
import nav, * as fromNav from '../navigation/reducers'
import home, * as fromHome from '../features/home/reducers'

const rootReducer = combineReducers({
    nav,
    home
});

export default rootReducer;


export const getNav = (state) =>
    fromNav.getScene(state.scene)

export const getHome = (state) =>
    fromHome.getTitle(state.title);