import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, ReferenceLine, ReferenceArea} from 'recharts'
import {Button} from 'reactstrap'

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
        let level = ""
        if (payload[0].value <= 1){
          level = "Not Well"
        }else if (payload[0].value <= 3){
          level = "Okay"
        }else{
          level = "Very Well"
        }
        return (
          <div className="custom-tooltip">
            <p>{`${"Date"} : ${payload[0].payload.date}`}</p>
            <p>{`${"Level"} : ${payload[0].value} => ${level}`}</p>
          </div>
        )
      }
      return null;
    }

  const Emoji = props => (
    <span 
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}>
        {props.symbol}
      </span>
  );

  return(
      <>
      <div className="user-container">
        <UserNav />
        <div className="user-body">
          <TopBar />
            <div className="captions">
              <h3><b>Pain Management and Arthritis Control</b></h3>
              <p>Here, you can review how well your used treatments have been managing your pain and controlling your arthritis.</p>
              <p>The values on this graph are taken directly from your past sessions using the JIA Option Map.</p>
              <p>You can hover any point on the graph to see the date you put this information and the value that you put!</p>
              <b className="spacing">From: To:</b>
              <br></br><br></br><br></br>
            </div>

            <div className="chooseTimes1">
              <select id="datesList">
                <option> </option>
                <option>Fill</option>
                <option>In</option>
                <option>Dates</option>
                <option>Later</option>
              </select>
            </div>

            <div className="chooseTimes2">
              <select id="datesList">
                <option> </option>
                <option>Fill</option>
                <option>In</option>
                <option>Dates</option>
                <option>Later</option>
              </select>
            </div>

            <div className="button">
              <Button className='load-btn'>Go!</Button>
            </div>

            <div className="t1">
              <p>Pain Management</p>
            </div>

            <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" label={{value:'Date', position:"bottom", offset:0}}/>
              <YAxis tickCount={6} domain={[0,5]} label={{value:"Pain Management", position:"insideLeft", angle:-90}}/>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="manage" stroke="#1f417e" />
              <ReferenceLine y={2.5} strokeDasharray="5 5" stroke="#000000"/> 
              <ReferenceArea y1={0} y2={1.5} fill="#03c04a" opacity={0.2}/>
              <ReferenceArea y1={1.5} y2={3.5} fill="#effd5f" opacity={0.2}/>
              <ReferenceArea y1={3.5} y2={5} fill="#e3242b" opacity={0.2}/> 
            </LineChart>

            <div className="legend">
              <h5><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Legend</b></h5>
              <h5>Your treatments have been treating your disease: </h5>
              <div className="emojis">
                <Emoji symbol="😞"/><br></br><br></br>
                <Emoji symbol="😐"/><br></br><br></br>
                <Emoji symbol="😃"/><br></br>
              </div>
              <div className="levels">
                <h6>{`${'0-1 => Not Well'}`}</h6><br></br>
                <h6>{`${'2-3 => Okay'}`}</h6><br></br>
                <h6>{`${'4-5 => Very Well'}`}</h6>
              </div>
            </div>
    
            <hr></hr><div className="t2">
              <p>Disease Control</p>
            </div>

            <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" label={{value:'Date', position:"bottom", offset:0}}/>
              <YAxis tickCount={6} domain={[0,5]} label={{value:"Disease Control", position:"insideLeft", angle:-90}}/>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="control" stroke="#d21404" />
              <ReferenceLine y={2.5} strokeDasharray="5 5" stroke="#000000"/>
              <ReferenceArea y1={0} y2={1.5} fill="#03c04a" opacity={0.2}/>
              <ReferenceArea y1={1.5} y2={3.5} fill="#effd5f" opacity={0.2}/>
              <ReferenceArea y1={3.5} y2={5} fill="#e3242b" opacity={0.2}/>
            </LineChart>

        </div>
      </div>
      </>
  )
}

export default Plots
