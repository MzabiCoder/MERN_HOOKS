import { REGISTER_SUCCESS,LOGIN_SUCCESS,LOGIN_FAIL, REGISTER_FAIL, CLEAR_ERRORS, USER_LOADED, AUTH_ERROR } from '../types'

export default (action, state) => {
    const { type, payload } = action
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading:false,
                user:payload
            }
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
              
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                loading: false,
                user: null,
                error:payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        
        
        default:
            return state
    }
}