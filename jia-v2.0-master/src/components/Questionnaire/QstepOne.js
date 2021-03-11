/**
 * @file
 * componenet for the first point in step 1 "Pain & treatments"
 * Get's and sets the slider value for the currently logged in user
 * @author <akel.ms93@gmail.com>
 */

import React, {useState, useEffect} from 'react'
import SliderControl from '../UI/Slider/SliderControl';
import {Collapse} from 'reactstrap';
import {getRequest} from "../../API/ApiHandler"

const QstepOne = ({painLevel, setPainLevel, setSaved, setSaveStatus}) => {
  const [collapse, setCollapse] = useState(true)

  const getPainLevel = async () => {
    let data = await getRequest(`/painLevels/user`)
    if(data) {
      let {data:{level}} = data
      setPainLevel(level)
    } 
  }

  const setValue = (value) => {
    setPainLevel(value)
    setSaved(false)
    setSaveStatus('default')
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
    sessionStorage.setItem('painlevel-collapse', !collapse)
  }
  
  useEffect(() => {
    getPainLevel()
    if(sessionStorage.getItem('painlevel-collapse')) {
      setCollapse(JSON.parse(sessionStorage.getItem('painlevel-collapse')))
    }
  }, [])

  return (
    <div className="box-container-numbered collapsable">
      <div onClick={handleCollapse}>
        <h4 className="numbered-subheading">1. In the past 7 days, how much pain on average have you had because of
            your arthritis?
          <span className="collapsed-icon">{collapse ? "-" : "+"}</span>
        </h4>
      </div>

      <Collapse isOpen={collapse}>
        <SliderControl 
          setValue={setValue} 
          minLabel="No Pain" 
          maxLabel="Extreme Pain" 
          forSlider="pain-level"
          reversed={true}
          value={painLevel}
        /> 
      </Collapse>
    </div>
  )
}

export default QstepOne