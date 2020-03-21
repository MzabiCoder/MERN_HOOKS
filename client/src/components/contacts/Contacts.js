import React,{useContext,Fragment} from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = props => {
    const contactContext = useContext(ContactContext)
    const {contacts}=contactContext
    return (
        <Fragment>
            {contacts.map(contact => <ContactItem contact={contact} key={contact.id} />)} 
           
        </Fragment>
    )
}

Contacts.propTypes = {

}

export default Contacts
