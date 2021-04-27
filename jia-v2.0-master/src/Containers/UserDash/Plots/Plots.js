import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, ReferenceLine, ReferenceArea} from 'recharts'
import {Button} from 'reactstrap'
import {getRequest} from "../../../API/ApiHandler"

import '../UserPanel.css'

const Plots = () => {
  const [user, setUser] = useState()
  const [logs, setLogs] = useState([])
  const [logsExport, setLogsExport] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getUser = async() => {
    let response = await getRequest('/auth/users/current/me')
    let user = ''
    if(response){
      user = response.data.id
    setUser(user)
    getLogs(user)
    }
  }

  const getLogs = async(user) => {
    const data = await getRequest(`/logs/${user}`)
    if(data) {
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      let updatedLog = data.map(log => {
        const options = { timeStyle: 'short', timeZone: 'UTC' }
        const time = new Date(log.createdAt).toLocaleTimeString('en-CA', options)
        const date = new Date(log.createdAt).toLocaleDateString('en-CA')
        log.date = date
        log.time = time
        return log
      })
      setLogs(updatedLog)
      getData(updatedLog)
    }
    setIsLoading(false)
  }

  const getData = (updatedLog) => {
    const exportList = updatedLog.map(el => {
     if(el.step_one !== null){ 
      let log = {
          date: el.date,
          "control": el.step_one ? JSON.parse(el.step_one).control_arthritis : '',
          "manage": el.step_one ? JSON.parse(el.step_one).manage_pain : ''
        }
        return log
      }
    })
    setLogsExport(exportList)
    removeNull(exportList)
  }

  const removeNull = (exportList) => {
    exportList = exportList.filter(function(element){
      return element !== undefined
    })
    setLogsExport(exportList)
    return exportList
  }

  useEffect(() => {
    setIsLoading(true)
    getUser()
    if(user) getLogs()
  },[user])

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
                <option>2021-03-15</option>
                <option>In</option>
                <option>Dates</option>
                <option>Later</option>
              </select>
            </div>

            <div className="chooseTimes2">
              <select id="datesList">
                <option> </option>
                <option>2021-03-19</option>
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

            <LineChart className="chart" width={1000} height={400} data={logsExport} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" label={{value:'Date', position:"bottom", offset:0}}/>
              <YAxis dataKey="manage" tickCount={6} domain={[0,5]} label={{value:"Pain Management", position:"insideLeft", angle:-90}}/>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="manage" stroke="#1f417e" />
              <ReferenceLine y={2.5} strokeDasharray="5 5" stroke="#000000"/> 
              <ReferenceArea y1={0} y2={1.5} fill="#e3242b" opacity={0.2}/>
              <ReferenceArea y1={1.5} y2={3.5} fill="#effd5f" opacity={0.2}/>
              <ReferenceArea y1={3.5} y2={5} fill="#03c04a" opacity={0.2}/> 
            </LineChart>

            <div className="legend">
              <h5><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Legend</b></h5>
              <h5>Your treatments have been </h5>
              <h5>treating your disease: </h5>
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
    
            <div className="t2">
              <p>Disease Control</p>
            </div>

            <LineChart className="chart2" width={1000} height={400} data={logsExport} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" label={{value:'Date', position:"bottom", offset:0}}/>
              <YAxis dataKey="control" tickCount={6} domain={[0,5]} label={{value:"Disease Control", position:"insideLeft", angle:-90}}/>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="control" stroke="#d21404" />
              <ReferenceLine y={2.5} strokeDasharray="5 5" stroke="#000000"/>
              <ReferenceArea y1={0} y2={1.5} fill="#e3242b" opacity={0.2}/>
              <ReferenceArea y1={1.5} y2={3.5} fill="#effd5f" opacity={0.2}/>
              <ReferenceArea y1={3.5} y2={5} fill="#03c04a" opacity={0.2}/>
            </LineChart>

        </div>
      </div>
      </>
  )
}

export default Plots
