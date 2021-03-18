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

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return(
    <div className='sub-header'>
      <div className="subheader-content">
        <h3>{title}</h3>
        <div className="subheader-right">
          {type === 'admin' && <NavLink to='/adminPanel/users'><h5>{lang === "English" ? "Admin Panel" : "panneau d'administration"}</h5></NavLink>}
          <h5 onClick={handleLogout}> {lang === "English" ? "Logout" : "Se déconnecter"} </h5>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Subheader)