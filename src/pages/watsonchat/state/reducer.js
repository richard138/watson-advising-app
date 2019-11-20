import * as types from './types'

const INITIAL_STATE = {
    watsonResponse: ''
}

export default (state=INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case types.SET_WATSON_RESPONSE:
            return {...state, watsonResponse: payload };

        default:
            return state;
    }
}