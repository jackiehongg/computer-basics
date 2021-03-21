import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../actions/types';

const initalState = {
    token: localStorage.getItem('token'),
    // isAuthenticated: localStorage.getItem('token') ? true : false,
    isAuthenticated: null,
    user: null,
}

export default function (state = initalState, action) {
    switch (action.type) {
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };

        default:
            return state;
    }
}