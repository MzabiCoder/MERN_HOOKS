import React,{useState, useContext,useEffect} from 'react'
import PropTypes from 'prop-types'
import AlertContext from '../../context/alerts/AlterContext'
import AuthContext from '../../context/auth/AuthContext'


const Register = props => {
 
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)
    const {Register,error,ClearError,isAuthenticated}=authContext
    const {setAlert}=alertContext
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2:''
    })

    useEffect(() => {
        if (error==='User already exists') {
            setAlert(error, 'danger')
            ClearError()
        }  
        //eslint-disable-next-line
        if (isAuthenticated) {
           props.history.push('/')
       } 
    },[error,isAuthenticated,props.history,setAlert, ClearError])
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSumbit = e => {
        e.preventDefault()
        if (name === '' || email==='' || password===''|| password2==='') {
        setAlert('Please Enter all fields...!!','danger')
        } else if (password !== password2) {
            setAlert('Passwords do not match!!','danger')
        } else {
          
         Register({name,email,password})
            
        }
   
    
    }
    
    const {name,email,password,password2}=user
    return (
        <div className="form-container">
            <h1>
             Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSumbit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password2</label>
                    <input type="password" name="password2" value={password2} onChange={onChange}/>
                </div>
                
  <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

Register.propTypes = {

}

export default Register
