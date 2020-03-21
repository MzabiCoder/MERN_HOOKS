import React from 'react'
import PropTypes from 'prop-types'

const About = () => {
    return (
        <div>
            <h1>ABout This App</h1>
            <p className="my-1">
                MERN app for tracking contacts
            </p>  
            <p className="bg-dark p">
            <strong>Version:</strong>1.0.0
            </p>
        </div>
    )
}

About.propTypes = {

}

export default About
