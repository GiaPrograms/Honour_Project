import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, ReferenceLine} from 'recharts'

import '../UserPanel.css'

const Plots = () => {
  const data = [
    {date: "2021-03-15", control: 3, manage: 4},
    {date: "2021-03-16", control: 2, manage: 1},
    {date: "2021-03-17", control: 1, manage: 0},
    {date: "2021-03-18", control: 5, manage: 3},
    {date: "2021-03-19", control: 3, manage: 5}]

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        console.log(payload[0].payload.treatment)
        return (
          <div className="custom-tooltip">
            <p>{`${"Date"} : ${payload[0].payload.date}`}</p>
            <p>{`${"Level"} : ${payload[0].value}`}</p>
          </div>
        )
      }
      return null;
    }

  return(
      <>
      <div className="user-container">
        <UserNav />
        <div className="user-body">
          <TopBar />
            <div className="captions">
              <h3><b>Pain Management and Arthritis Control</b></h3>
              <p>Here, you can review how well your planned treatments have been managing your pain and controlling your arthritis.</p>
              <p>The values on this graph are taken directly from your past sessions using the JIA Option Map.</p>
              <p>You can hover any point on the graph to see the date you put this information and the value that you put!</p>
              <br></br>
            </div>

            <div className="t1">
              <p>Pain Management</p>
            </div>

            <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" label={{value:'Date', position:"bottom", offset:0}}/>
              <YAxis tickCount='6' domain={[0,5]} label={{value:"Pain Management", position:"insideLeft", angle:-90}}/>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="manage" stroke="#1f417e" />
              <ReferenceLine y={2.5} strokeDasharray="5 5" stroke="#000000"/>
            </LineChart>

            <hr></hr><div className="t2">
              <p>Disease Control</p>
            </div>

            <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" label={{value:'Date', position:"bottom", offset:0}}/>
              <YAxis tickCount='6' domain={[0,5]} label={{value:"Disease Control", position:"insideLeft", angle:-90}}/>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="control" stroke="#d21404" />
              <ReferenceLine y={2.5} strokeDasharray="5 5" stroke="#000000"/>
            </LineChart>

        </div>
      </div>
      </>
  )
}

export default Plots
