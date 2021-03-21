import axios from 'axios';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

export const login = (username, password) => (dispatch) => {
    console.log("auth login")
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({username, password})

    axios.post('/api/auth/login', body, config)
        .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        dispatch({
            type: LOGIN_FAIL,
            payload: res.data,
        })
    })
}

export const logout = () => (dispatch, getState) => {
    console.log("auth logout");
    axios.post('/api/auth/logout', null, tokenConfig(getState)).then(res => {
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        console.log("logout fail");
    })
}

export const register = (username, email, password) => {
    console.log("auth register")
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({username, email, password})

    axios.post('/api/auth/register', body, config).then(res => {
        console.log("Register success")
    }).catch(err => {
        console.log("Register failed")
    })
}

// Setup config with token - helper function
export const tokenConfig = (getState) => {
    const token = getState().auth.token;
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  
    return config;
  };