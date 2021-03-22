import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {LineChart, XAxis, YAxis, Legend, Line, CartesianGrid, Tooltip} from 'recharts'

import '../UserPanel.css'

const Plots = () => {
  const data = [
    {"date":"2021-03-15", "control": 3, "manage": 4},
    {"date":"2021-03-16", "control": 2, "manage": 1},
    {"date":"2021-03-17", "control": 1, "manage": 0},
    {"date":"2021-03-18", "control": 5, "manage": 3},
    {"date":"2021-03-19", "control": 3, "manage": 5}]

  return(
      <>
      <div className="user-container">
        <UserNav />
        <div className="user-body">
          <TopBar />
            <div className="captions">
              <h3><b>Arthritis Management and Control</b></h3>
              <p>View how well your planned treatments have been controlling your pain and managing your arthritis</p>
              <br></br>
            </div>

            <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickCount='6' domain={[0,5]} />
              <Legend verticalAlign='top' />
              <Tooltip />
              <Line type="monotone" dataKey="control" stroke="#1f417e" />
              <Line type="monotone" dataKey="manage" stroke="#d21404" />
            </LineChart>

        </div>
      </div>
      </>
  )
}

export default Plots
