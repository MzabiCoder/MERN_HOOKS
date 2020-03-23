import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2:''
    })
    const onChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSumbit = e => {
        e.preventDefault()
    console.log('Register Submitted');
    
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
