import * as actionTypes  from '../Constants/actionTypes'
const DEFAULT_STATE = { version :"" }

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_VERSION:
      return { ...state, version: action.payload };
    default:
      return state;
  }
}
