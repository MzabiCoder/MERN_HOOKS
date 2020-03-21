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
        default:
            return state
    }
}