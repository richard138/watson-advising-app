import * as types from './types'

const INITIAL_STATE = {
    token: null,
    loading: false,
    loginSuccessful: false,
}

export default (state=INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case types.SET_LOADING:
            return {...state, loading: payload };
        case types.SET_LOGIN_SUCCESSFUL:
            return {...state, loginSuccessful: payload };
        case types.SET_TOKEN:
            return {...state, token: payload };
        default:
            return state;
    }
}