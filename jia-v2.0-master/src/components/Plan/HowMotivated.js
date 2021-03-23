import React, { useEffect } from 'react'
import SliderControl from '../../components/UI/Slider/SliderControl'
import {getRequest} from "../../API/ApiHandler"

const HowMotivated = ({motivationLevel, setMotivationLevel, setSaved, setSaveStatus}) => {
  const getMotivationLevel = async() => {
    let data = await getRequest(`/motivations/user`)
    if(data) {
      let {data:{level}} = data
      setMotivationLevel(level)
    } 
  }

  const setValue = (value) => {
    setMotivationLevel(value)
    setSaved(false)
    setSaveStatus('default')
  }
  
  useEffect(() => {
    getMotivationLevel()
  }, [])

  return (
    <div className="box-container-numbered">
    <h4 className="numbered-subheading">2. How motivated are you to follow your new plan?</h4>
    <SliderControl
      setValue={setValue} 
      minLabel="Not Motivated at All" 
      maxLabel="Very Motivated"
      forSlider="motivated-to-follow"
      value={motivationLevel}
    />
  </div>
  )
}

export default HowMotivated