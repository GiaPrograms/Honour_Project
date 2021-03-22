import React, { useState, useEffect } from 'react'
import SliderControl from '../../components/UI/Slider/SliderControl'
import {getRequest} from "../../API/ApiHandler"

const HowMotivated = ({motivationLevel, setMotivationLevel, setSaved, setSaveStatus}) => {

  const [collapse, setCollapse] = useState(true)
  const [other, setOther] = useState()


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
//=============checked to change color


const checkedZero = ev => {
  let buttonList = document.querySelectorAll(".StepFour-div-other div");
  buttonList.forEach((button) => {
    if (button.style.backgroundColor) button.style.backgroundColor = ""
  });
  ev.target.style.backgroundColor = "#008000";
  //10434F

  let medVal = ev.target.getAttribute("value")
  setOther(medVal)

  setSaved(false)
  setSaveStatus('default')
}

const checkedOne = ev => {
  let buttonList = document.querySelectorAll(".StepFour-div-other div");
  buttonList.forEach((button) => {
    if (button.style.backgroundColor) button.style.backgroundColor = ""
  });
  ev.target.style.backgroundColor = "#8FE381";
  //10434F

  let medVal = ev.target.getAttribute("value")
  setOther(medVal)

  setSaved(false)
  setSaveStatus('default')
}

const checkedTwo = ev => {
  let buttonList = document.querySelectorAll(".StepFour-div-other div");
  buttonList.forEach((button) => {
    if (button.style.backgroundColor) button.style.backgroundColor = ""
  });
  ev.target.style.backgroundColor = "#B0F5AB";
  //10434F

  let medVal = ev.target.getAttribute("value")
  setOther(medVal)

  setSaved(false)
  setSaveStatus('default')
}

const checkedThree = ev => {
  let buttonList = document.querySelectorAll(".StepFour-div-other div");
  buttonList.forEach((button) => {
    if (button.style.backgroundColor) button.style.backgroundColor = ""
  });
  ev.target.style.backgroundColor = "#ffff7f";
  //10434F

  let medVal = ev.target.getAttribute("value")
  setOther(medVal)

  setSaved(false)
  setSaveStatus('default')
}

const checkedFour = ev => {
  let buttonList = document.querySelectorAll(".StepFour-div-other div");
  buttonList.forEach((button) => {
    if (button.style.backgroundColor) button.style.backgroundColor = ""
  });
  ev.target.style.backgroundColor = "#FC6C85";
  //10434F

  let medVal = ev.target.getAttribute("value")
  setOther(medVal)

  setSaved(false)
  setSaveStatus('default')
}
const checkedFive = ev => {
  let buttonList = document.querySelectorAll(".StepFour-div-other div");
  buttonList.forEach((button) => {
    if (button.style.backgroundColor) button.style.backgroundColor = ""
  });
  ev.target.style.backgroundColor = "#FF0000";
  //10434F
}
  
  
  useEffect(() => {
    getMotivationLevel()
  }, [])

  return (
    <div className="box-container-numbered">
    <h4 className="numbered-subheading">2. How motivated are you to follow your new plan?</h4>
    {/* <SliderControl
      setValue={setValue} 
      minLabel="Not Motivated at All" 
      maxLabel="Very Motivated"
      forSlider="motivated-to-follow"
      value={motivationLevel}
    /> */}


    <h4 class="text-left-right">
    <span class="left-text">Not Motivated at All</span>
    <span class="byline">Very Motivated</span>

    <div className="StepFour-div-group other">
    <div className="StepFour-div-other">
      <label>0</label>
      <div value="Well0" onClick={checkedZero}></div>
                
    </div>
      <div className="StepFour-div-other">
      <label>1</label>
      <div value="Well1" onClick={checkedOne}></div>
                
      </div>
      <div className="StepFour-div-other">
      <label>2</label>
      <div value="Well2" onClick={checkedTwo}></div>
      </div>
      <div className="StepFour-div-other">
      <label>3</label>
      <div value="Well3" onClick={checkedThree}></div>
      </div>
      <div className="StepFour-div-other">
      <label>4</label>
      <div value="Well4" onClick={checkedFour}></div>
      </div>
      <div className="StepFour-div-other">
      <label>5</label>
      <div value="Well5" onClick={checkedFive}></div>
      </div>

    </div>

    </h4>
              

  </div>
  )
}

export default HowMotivated