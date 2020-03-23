import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
      
    })
    const onChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSumbit = e => {
        e.preventDefault()
    console.log('Register Submitted');
    
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
