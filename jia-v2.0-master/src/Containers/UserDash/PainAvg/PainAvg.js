import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

import '../UserPanel.css'

const PainAvg = () => {

  const data = [
    {"name": "2021-03-12", "level": 3},
    {"name": "2021-03-13", "level": 5},
    {"name": "2021-03-14", "level": 2},
    {"name": "2021-03-15", "level": 4},
    {"name": "2021-03-16", "level": 0}]

  return(
      <>
      <div className="user-container">
        <UserNav />
        <div className="user-body">
          <TopBar />
          <div className="captions">
            <h3><b>Pain Averaging Over Time</b></h3>
            <p>View how your pain has changed over time</p>
            <br></br>
          </div>

          <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickCount='6' domain={[0,5]}/>
            <Tooltip />
            <Line type="monotone" dataKey="level" stroke="#296d98" />
          </LineChart>


        </div>
      </div>
      </>
  )
}

export default PainAvg
