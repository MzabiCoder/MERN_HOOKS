import React, { useReducer } from 'react'
import ContactContext from './ContactContext'
import contactReducer from './ContactReducer'
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT, FILTER_CONTACT, CLEAR_FILTER } from '../types'
import uuid from "uuid"

const ContactState = props => {
    const Istate = {
        contacts: [{
            id: 1,
            name: 'nabil fannane',
            email: 'nabil@gmail.com',
            phone: '87678687',
            type:'professional'
        },
        {
            id: 2,
            name: 'adil fannane',
            email: 'adil@gmail.com',
            phone: '87678687',
            type:'professional'
            },
            {
            id: 3,
            name: 'fatima fannane',
            email: 'fatima@gmail.com',
            phone: '87678687',
            type:'professional'
            },
            {
                id: 4,
                name: 'contact4',
                email: 'contact4',
                phone: 'contact4',
                type:'personal'
            }],
        current: null,
        filtred:null
    }
    const [state, dispatch] = useReducer(contactReducer, Istate)
    
    // add contact
    const addContect = contact => {
        contact.id = 8
        dispatch({type:ADD_CONTACT,payload:contact})
}

    //delete contact

    const dele = id => {
        dispatch({ type:DELETE_CONTACT,payload:id})
    }


    // set current contact

    const setCurrent= contact => {
        dispatch({ type:SET_CURRENT,payload:contact})
    }

    //clear current contact

    const clearCurrent= () => {
        dispatch({ type:CLEAR_CURRENT})
    }

    // update contact

    const updateContact= contact => {
        dispatch({ type:UPDATE_CONTACT,payload:contact})
    }

    // filter contact

    const filter= text => {
        dispatch({ type:FILTER_CONTACT,payload:text})
    }


    // clear filter
    const clearFilter= () => {
        dispatch({ type:CLEAR_FILTER})
    }


    return (
        <ContactContext.Provider
        
            value={{
                contacts: state.contacts,
                addContect,
                dele,
                current: state.current,
                setCurrent,
                clearCurrent,
                updateContact,
                filter,
                clearFilter,
                filtred:state.filtred
            }}
        >
        {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState