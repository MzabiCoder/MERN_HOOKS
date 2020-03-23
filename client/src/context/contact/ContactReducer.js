import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT, FILTER_CONTACT, CLEAR_FILTER } from '../types'

export default (state, action)=>{
  const {type,payload}=action
    switch (type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts:[...state.contacts,payload]
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts:state.contacts.filter(con=>con.id !== payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current:payload

            }
            case CLEAR_CURRENT:
                return {
                    ...state,
                    current:null
    
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts:state.contacts.map(contact=>contact.id===payload.id?payload:contact)
            }
        case FILTER_CONTACT:
            return {
                ...state,
                filtred: state.contacts.filter(contact => {
                    const regex=new RegExp(`${payload}`,'gi')
                    return contact.name.match(regex) || contact.email.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtred:null
            }
        default:
            return state
    }
}