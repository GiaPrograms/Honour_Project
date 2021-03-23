import React, { useState, useEffect } from 'react'
import SliderControl from '../UI/Slider/SliderControl';
import {Collapse} from 'reactstrap';
import {getRequest} from "../../API/ApiHandler"

const QStepSix = ({controlArthritis, setControlArthritis, managePain, setManagePain, setSaved, setSaveStatus})  => {
  const [collapse, setCollapse] = useState(true)

  const getSlidersValues = async() => {
    const data = await getRequest(`/effectiveness/user`)
    if(data) {
      const { data:{control_arthritis, manage_pain} } = data
      setControlArthritis(control_arthritis)
      setManagePain(manage_pain)
    }
  }

  const setValue = (value, ...others) => {
    let forSlider = others[1]
    forSlider === "control-arthritis" 
      ? setControlArthritis(value) 
      : setManagePain(value)

    setSaved(false)
    setSaveStatus('default')
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
    sessionStorage.setItem('howwell-collapse', !collapse)
  }

  useEffect(() => {
    getSlidersValues()
    if(sessionStorage.getItem('howwell-collapse')) {
      setCollapse(JSON.parse(sessionStorage.getItem('howwell-collapse')))
    }
  }, [])

  return(
    <React.Fragment>
      <div className="pain-div box-container-numbered collapsable">
        <div id="sixth" onClick={handleCollapse}>
          <h4 className="numbered-subheading">6. How well does your treatment ...
            <span className="collapsed-icon">{collapse ? "-" : "+"}</span>
          </h4>
        </div>
        <Collapse isOpen={collapse}>
          <div className="padding-class">
            <h4>... control your arthritis?</h4>
            <SliderControl 
              setValue={setValue} 
              minLabel="Not Well at All"
              maxLabel="Very Well"
              forSlider="control-arthritis"
              reversed={false}
              value={controlArthritis}
            />
            <h4>... manage your pain?</h4>
            <SliderControl 
              setValue={setValue} 
              minLabel="Not Well at All" 
              maxLabel="Very Well"
              forSlider="manage-pain"
              reversed={false}
              value={managePain}
            />
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  )
}

export default QStepSix