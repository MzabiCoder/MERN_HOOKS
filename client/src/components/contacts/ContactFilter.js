import React,{useContext,useRef,useEffect} from 'react'
import ContactContext from '../../context/contact/ContactContext'

const ContactFilter = () => {
    const contactContext = useContext(ContactContext)
    const { filtred, clearFilter, filter } = contactContext
    const text = useRef('')
    useEffect(() => {
        
        if (filtred === null) {
            text.current.value=''
        }
    })
    const onChange = e => {
        if (text.current.value !== '') {
            filter(e.target.value)
        } else {
            clearFilter()
        }
    }

    
    return (
        <form action="">
            <input type="text" placeholder="Filter contacts..." ref={text} onChange={onChange}/>
        </form>
    )
}

ContactFilter.propTypes = {

}

export default ContactFilter
