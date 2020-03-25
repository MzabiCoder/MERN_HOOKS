import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AlertContext from '../../context/alerts/AlterContext'


const Alerts = () => {
    const altertContext = useContext(AlertContext)
    const {alerts}=altertContext
    return (
        alerts.length > 0 && alerts.map(alert => {
           return  <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" />{' '}{alert.msg}  
            </div>
        })
    )
}

Alerts.propTypes = {

}

export default Alerts
