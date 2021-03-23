import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {PieChart, Pie, Legend, Slice} from 'recharts'

import '../UserPanel.css'

const TreatmentAvg = () => {
  const data = [
    {"name": "Massage", "value": 4, fill: "#68BB59"},
    {"name": "Yoga", "value": 3, fill: "#c63212"},
    {"name": "Pilates", "value": 7, fill: "#127fc6"},
    {"name": "Custom-made Foot Orthotics", "value": 2, fill: "#c112c6"}]

  return(
      <>
      <div className="user-container">
        <UserNav />
        <div className="user-body">
          <TopBar />
          <div className="captions">
            <h3><b>Treatment Averages</b></h3>
            <p>View the number of times you have added treatments to your plan</p>
            <br></br>
          </div>

          <PieChart width={730} height={500}>
            <Legend layout='vertical' align='left' verticalAlign='middle' iconType='circle'/>
            <Pie data={data} dataKey="value" nameKey="name" label />  
          </PieChart>

        </div>
      </div>
      </>
  )
}

export default TreatmentAvg
