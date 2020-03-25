import React,{useState,useContext,useEffect} from 'react'
import PropTypes from 'prop-types'
import AlertContext from '../../context/alerts/AlterContext'
import AuthContext from '../../context/auth/AuthContext'


const Login = props => {
    const alertContext = useContext(AlertContext)
    const authContext=useContext(AuthContext)
    const { setAlert } = alertContext
    const {Login,error,ClearError,isAuthenticated}=authContext

    const [user, setUser] = useState({
        email: '',
        password: '',
      
    })
    const onChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        } 

        if (error==='Invalid credentials') {
            setAlert(error, 'danger')
            ClearError()
        }  
        //eslint-disable-next-line
       
    },[error,isAuthenticated,props.history,setAlert, ClearError])

    const onSumbit = e => {
        e.preventDefault()
        if (  email=== '' || password=== '') {
            setAlert('Please Enter all fields...!!','danger')
            } else {
             Login({email,password})
            }
    
    }
    
    const { email,password}=user
    return (
        <div className="form-container">
            <h1>
             Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSumbit}>
               
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>
               
                
          <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

Login.propTypes = {

}

export default Login
