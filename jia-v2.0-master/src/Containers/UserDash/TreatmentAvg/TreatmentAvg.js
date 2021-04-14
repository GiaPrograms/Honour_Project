import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {PieChart, Pie, Legend} from 'recharts'

import '../UserPanel.css'

const TreatmentAvg = () => {
  const data = [
    {name: "Massage", value: 4, fill: "#68BB59"},
    {name: "Yoga", value: 3, fill: "#c63212"},
    {name: "Pilates", value: 7, fill: "#127fc6"},
    {name: "Custom-made Foot Orthotics", value: 2, fill: "#c112c6"}]

  const data2 = [
    {name: "Massage", value: 3, fill: "#68BB59"},
    {name: "Yoga", value: 3, fill: "#c63212"},
    {name: "Pilates", value: 5, fill: "#127fc6"},
    {name: "Custom-made Foot Orthotics", value: 2, fill: "#c112c6"},
    {name: "Heat", value: 1, fill: "#3743AA"}
  ]

  return(
      <>
      <div className="user-container">
        <UserNav />
        <div className="user-body">
          <TopBar />
          <div className="captions">
            <h3><b>Treatment Averages</b></h3>
            <p>Here, you can review how many times you have added treatments to your plan and used certain treatments.</p>
            <p>The first graph shows how many times you have added a treatment to your plan using the JIA Option Map.</p>
            <p>The second graph shows how many you've used the treatments you planned.</p>
            <p>This will let you know which treatments you enjoy using the most!</p>
            <br></br>
          </div>

          <div className="t3">
            <p><b>Treatments Planned</b></p>
          </div>

          <PieChart width={730} height={500}>
            <Legend layout='vertical' align='left' verticalAlign='middle' iconType='circle'/>
            <Pie data={data} dataKey="value" nameKey="name" label />  
          </PieChart>

          <hr></hr><div className="t4">
            <p><b>Treatments Used</b></p>
          </div>

          <PieChart width={730} height={500}>
            <Legend layout='vertical' align='left' verticalAlign='middle' iconType='circle'/>
            <Pie data={data2} dataKey="value" nameKey="name" label />  
          </PieChart>

        </div>
      </div>
      </>
  )
}

export default TreatmentAvg
