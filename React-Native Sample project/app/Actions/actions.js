import * as actionsconstant from '../Constants/actionTypes';

export function setVersion(version) {
    return {
        type: actionsconstant.SET_VERSION,
        payload: version
      };
}