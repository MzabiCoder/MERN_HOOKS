import React,{Fragment,useState, useContext,useEffect} from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/ContactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    //const { contacts } = contactContext
    const {addContect,current,clearCurrent,updateContact}=contactContext
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type:''
    })

   

    const { name, email, phone, type } = contact
    useEffect(() => {
        if (current !== null) {
            setContact(current)
        } else {
            setContact({ name: '',
            email: '',
            phone: '',
            type:''})
        }
        
    },[current])
    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })
    const submit = e => {
        e.preventDefault()
        
        if (contact === null) {
        addContect(contact)
        setContact({ name: '',
        email: '',
        phone: '',
            type: ''
        }) 
        } else {
            updateContact(contact) 
        }
       clearCurrent()
  
    }

    const clearAll = () => {
        clearCurrent()
    }
    return (
        <Fragment>
            <form onSubmit={submit}>
                <h2 className="text-primary">{current===null ? 'Add Contact':'Update Contact'}</h2>
                <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
                <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
                <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}/>
                <h5>Contact Type</h5>
                <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal {' '}
                <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} />professional{' '}
                <div>
                <input  type="submit" value={current===null ? 'Add Contact':'Update Contact'} className="btn btn-primary btn-block"/>
                </div>
                {current && (<div>
                    <button onClick={clearAll} className="btn btn-light btn-block">Clear</button>
                </div>)}
            </form>
            
        </Fragment>
    )
}

ContactForm.propTypes = {

}

export default ContactForm
