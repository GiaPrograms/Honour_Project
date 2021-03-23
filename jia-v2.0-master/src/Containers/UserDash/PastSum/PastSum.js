import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'

import '../UserPanel.css'

const PastSum = () => {
  return(
      <>
      <div className="user-container">
        <UserNav />
        <div className="user-body">
          <TopBar />
            <div className="captions">
              <h3><b>Review Past Summaries</b></h3>
              <p>Use the dropdown menu to view summaries of past sessions using the JIA Option Map</p>
              <br></br>
              <b>Choose Date: </b>
            </div>

            <div className="dropdown">
              <select id="datesList">
                <option> </option>
                <option>Fill</option>
                <option>In</option>
                <option>Dates</option>
                <option>Later</option>
              </select>
            </div>
            <h5>Currently looking into viewing pdf's in page</h5>

        </div>
      </div>
      </>
  )
}

export default PastSum
