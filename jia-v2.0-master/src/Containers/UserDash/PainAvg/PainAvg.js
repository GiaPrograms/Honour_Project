import React, {useState, useEffect} from 'react'
import TopBar from '../../../components/Admin/TopBar'
import UserNav from '../../../components/UserDash/UserNav'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea} from 'recharts'
import {Button} from 'reactstrap'
import {getRequest} from "../../../API/ApiHandler"

import '../UserPanel.css'

const PainAvg = () => {
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
          "level": el.step_one ? JSON.parse(el.step_one).pain_level : '',
          "treatment": el.step_one ? JSON.parse(el.step_one).other_treatments : ''
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
        level = "No Pain"
      }else if (payload[0].value <= 3){
        level = "Moderate Pain"
      }else{
        level = "Extreme Pain"
      }

      let treatments = []
      for(var i = 0; i < payload[0].payload.treatment.length; i ++){
        treatments.push(" " + payload[0].payload.treatment[i].name)
      }

      return (
        <div className="custom-tooltip">
          <p>{`${"Date"} : ${payload[0].payload.date}`}</p>
          <p>{`${"Pain Avg"} : ${payload[0].value} => ${level}`}</p>
          <p>{`${"Treatments Used"} : ${treatments.length !== 0 ? treatments : 'None'}`}</p>
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
            <h3><b>Pain Averaging Over Time</b></h3>
            <p>Here, you can review how much pain on average you have had because of your arthritis.</p>
            <p>The values on this graph are taken directly from your past sessions using the JIA Option Map.</p>
            <p>You can hover any point on the graph to see the date you put this information, the value you put, and the treatments you planned on that day!</p>
            <b className="spacing">From: To:</b>
            <br></br><br></br><br></br>
          </div>

          <div className="chooseTimes1">
            <select id="logsExport">
            </select>
          </div>

          <div className="chooseTimes2">
            <select id="datesList">
              <option> </option>
              <option>2021-03-16</option>
              <option>In</option>
              <option>Dates</option>
              <option>Later</option>
            </select>
          </div>

          <div className="button">
            <Button className='load-btn'>Go!</Button>
          </div>

          <LineChart className="chart" width={1000} height={400} data={logsExport} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" label={{value:'Date', position:"bottom", offset:0}}/>
            <YAxis dataKey="level" tickCount={6} domain={[0,5]} label={{value:"Pain Average", position:"insideLeft", angle:-90}}/>
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="level" stroke="#296d98" />
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

export default PainAvg
