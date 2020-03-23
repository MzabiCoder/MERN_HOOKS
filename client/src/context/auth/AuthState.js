import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import { REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,CLEAR_ERRORS } from '../types'


const AuthState = props => {
    const Istate = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user:null
    }
    const [state, dispatch] = useReducer(AuthReducer, Istate)
    
    // load user

    // Register user

    //login user

    // Logout user

    //Clear errors


    return (
        <AuthContext.Provider
        
            value={{
                token: state.token,
                error: state.error,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user:state.user
            }}
        >
        {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState