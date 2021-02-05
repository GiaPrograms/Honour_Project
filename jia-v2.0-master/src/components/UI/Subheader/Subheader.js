import React from 'react'
import {NavLink, withRouter} from 'react-router-dom';

import "./Subheader.css"
import { type, logout, getUserType } from '../../AuthenticationService';

const Subheader = ({title, history}) => {
  
  const handleLogout = () => {
    logout()
    history.push('/')
  }

  React.useEffect(() => {
    getUserType()
  })

  return(
    <div className='sub-header'>
      <div className="subheader-content">
        <h3>{title}</h3>
        <div className="subheader-right">
          {type === 'admin' && <NavLink to='/adminPanel/users'><h5>Admin Panel</h5></NavLink>}
          <h5 onClick={handleLogout}>Logout</h5>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Subheader)