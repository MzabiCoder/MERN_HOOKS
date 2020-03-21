import React, { useReducer } from 'react'
import ContactContext from './ContactContext'
import contactReducer from './ContactReducer'
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT, FILTER_CONTACT, CLEAR_FILTER } from '../types'
import uuid from "uuid"

const ContactState = props => {
    const Istate = {
        contacts: [{
            id: 1,
            name: 'contact1',
            email: 'contact1',
            phone: 'contact1',
            type:'professional'
        },
        {
            id: 2,
            name: 'contact2',
            email: 'contact2',
            phone: 'contact2',
            type:'contact2'
            },
            {
                id: 3,
                name: 'contact3',
                email: 'contact3',
                phone: 'contact3',
                type:'professional'
            },
            {
                id: 4,
                name: 'contact4',
                email: 'contact4',
                phone: 'contact4',
                type:'contact4'
            }],
        current:null
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



    // filter contact


    // clear filter


    return (
        <ContactContext.Provider
        
            value={{
                contacts: state.contacts,
                addContect,
                dele,
                current: state.current,
                setCurrent,
                clearCurrent
            }}
        >
        {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState