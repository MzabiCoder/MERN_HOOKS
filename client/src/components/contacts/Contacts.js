import React,{useContext,Fragment} from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

const Contacts = props => {
    const contactContext = useContext(ContactContext)
    const { contacts, filtred } = contactContext
    
    if (contacts.length == 0) {
         return <h1>Please enter contacts....</h1>
     }
    return (
        <Fragment>
            <TransitionGroup>
                {filtred !== null ? filtred.map(contact =>
                    <CSSTransition key={contact.id} timeout={500} classNames="item">
                        <ContactItem contact={contact}  />
                    </CSSTransition>) : contacts.map(contact =>
                        <CSSTransition key={contact.id} timeout={500} classNames="item">
                            <ContactItem contact={contact} />
                            </CSSTransition>
                    )}
            </TransitionGroup>
            
           
        </Fragment>
    )
}

Contacts.propTypes = {

}

export default Contacts
