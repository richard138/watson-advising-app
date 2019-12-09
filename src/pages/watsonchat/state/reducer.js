import * as types from './types'

//The INITIAL_STATE object is holds the state of the page.
const INITIAL_STATE = {
    watsonResponse: ''
}

// This switch statment updates the state based on a "type". When an action is dispatched it contains a "payload" and a "type".
// Based on the "type" the reducer updates the state with the action's payload.
export default (state=INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case types.SET_WATSON_RESPONSE:
            return {...state, watsonResponse: payload };

        default:
            return state;
    }
}