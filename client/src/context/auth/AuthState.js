import React, { useReducer } from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, CLEAR_ERRORS } from '../types'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'


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

    const LoadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        try {
            const res = await axios.get('/api/auth')
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
            // console.log(res.data);
             
        } catch (error) {
            dispatch({
                type: AUTH_ERROR
            })   
        }
    }

    // Register user

    const Register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }

        }
        try {
            const res = await axios.post('/api/users',formData,config)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
            LoadUser()
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload:error.response.data.message
            })
        }
     
    }

    //login user

    const Login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }

        }
        try {
            const res = await axios.post('/api/auth',formData,config)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            LoadUser()
        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload:error.response.data.message
            })
        }
     
    }

    // Logout user

    //Clear errors
    const ClearError=()=>dispatch({type:CLEAR_ERRORS})


    return (
        <AuthContext.Provider
        
            value={{
                token: state.token,
                error: state.error,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                Register,
                ClearError,
                LoadUser,
                Login
               
            }}
        >
        {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState