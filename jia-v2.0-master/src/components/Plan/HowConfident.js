import React, { useEffect } from 'react'
import SliderControl from '../../components/UI/Slider/SliderControl'
import {getRequest} from "../../API/ApiHandler"

const HowConfident = ({confidenceLevel, setConfidenceLevel, setSaved, setSaveStatus}) => {
  const getConfidenceLevel = async () => {
    let data = await getRequest(`/confidence/user`)
    if(data) {
      let {data:{level}} = data
      setConfidenceLevel(level)
    } 
  }

  const setValue = (value) => {
    setConfidenceLevel(value)
    setSaved(false)
    setSaveStatus('default')
  }
  
  useEffect(() => {
    getConfidenceLevel()
  }, [])

  return (
    <div className="box-container-numbered">
      <h4 className="numbered-subheading">3. How confident are you that you can follow your plan?</h4>
      <SliderControl 
        setValue={setValue} 
        minLabel="Not confident at all" 
        maxLabel="Very confident"
        forSlider="confident-of-following"
        value={confidenceLevel}
      />
    </div>
  )
}

export default HowConfident