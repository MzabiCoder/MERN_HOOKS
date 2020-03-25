import React, { useReducer } from 'react'
import AlertContext from './AlterContext'
import AlertReducer from './AlertReducer'
//import uuid from 'uuid'
import { SET_ALERT,REMOVE_ALERT } from '../types'


const AlertState = props => {
    const Istate = []
    const [state, dispatch] = useReducer(AlertReducer,Istate)
    
    // Set alert
    const setAlert =(msg,type,timeout=5000) => {
        const tab=[1,2,3,4,5,6,7,8]

       const id=tab[Math.floor(Math.random() * tab.length)]
        dispatch({ type: SET_ALERT, payload: {id,msg,type} })
        setTimeout(() => {
            dispatch({type:REMOVE_ALERT,payload:id},timeout)
        },2000)
}
   


    return (
        <AlertContext.Provider
        
            value={{
                alerts: state,
                setAlert,
            }}
        >
        {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState