/**
 * @file
 * componenet for the first point in step 1 "Pain & treatments"
 * Get's and sets the slider value for the currently logged in user
 * @author <akel.ms93@gmail.com>
 */
import React, {useState, useEffect} from 'react'
import {Collapse} from 'reactstrap';
import {getRequest} from "../../API/ApiHandler"
import NavigationButton from '../UI/Buttons/NavigationButton';
import CircleControl from '../UI/Slider/CircleControl';
import SliderControl from '../UI/Slider/SliderControl';


const QstepOne = ({painLevel, setPainLevel, setSaved, setSaveStatus}) => {
  const [collapse, setCollapse] = useState(true)
  const [notAlways, setNotAlways] = useState()
  const [prescribed, setPrescribed] = useState()
  const [other, setOther] = useState()

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


  //=============checked to change color


  // const checkedZero = ev => {
  //   let buttonList = document.querySelectorAll(".StepFour-div-other div");
  //   buttonList.forEach((button) => {
  //     if (button.style.backgroundColor) button.style.backgroundColor = ""
  //   });
  //   ev.target.style.backgroundColor = "#008000";
  //   //10434F

  //   let medVal = ev.target.getAttribute("value")
  //   setOther(medVal)
  
  //   setSaved(false)
  //   setSaveStatus('default')
  // }

  // const checkedOne = ev => {
  //   let buttonList = document.querySelectorAll(".StepFour-div-other div");
  //   buttonList.forEach((button) => {
  //     if (button.style.backgroundColor) button.style.backgroundColor = ""
  //   });
  //   ev.target.style.backgroundColor = "#8FE381";
  //   //10434F

  //   let medVal = ev.target.getAttribute("value")
  //   setOther(medVal)
  
  //   setSaved(false)
  //   setSaveStatus('default')
  // }

  // const checkedTwo = ev => {
  //   let buttonList = document.querySelectorAll(".StepFour-div-other div");
  //   buttonList.forEach((button) => {
  //     if (button.style.backgroundColor) button.style.backgroundColor = ""
  //   });
  //   ev.target.style.backgroundColor = "#B0F5AB";
  //   //10434F

  //   let medVal = ev.target.getAttribute("value")
  //   setOther(medVal)
  
  //   setSaved(false)
  //   setSaveStatus('default')
  // }

  // const checkedThree = ev => {
  //   let buttonList = document.querySelectorAll(".StepFour-div-other div");
  //   buttonList.forEach((button) => {
  //     if (button.style.backgroundColor) button.style.backgroundColor = ""
  //   });
  //   ev.target.style.backgroundColor = "#ffff7f";
  //   //10434F

  //   let medVal = ev.target.getAttribute("value")
  //   setOther(medVal)
  
  //   setSaved(false)
  //   setSaveStatus('default')
  // }

  // const checkedFour = ev => {
  //   let buttonList = document.querySelectorAll(".StepFour-div-other div");
  //   buttonList.forEach((button) => {
  //     if (button.style.backgroundColor) button.style.backgroundColor = ""
  //   });
  //   ev.target.style.backgroundColor = "#FC6C85";
  //   //10434F

  //   let medVal = ev.target.getAttribute("value")
  //   setOther(medVal)
  
  //   setSaved(false)
  //   setSaveStatus('default')
  // }
  // const checkedFive = ev => {
  //   let buttonList = document.querySelectorAll(".StepFour-div-other div");
  //   buttonList.forEach((button) => {
  //     if (button.style.backgroundColor) button.style.backgroundColor = ""
  //   });
  //   ev.target.style.backgroundColor = "#FF0000";
  //   //10434F

  //   let medVal = ev.target.getAttribute("value")
  //   setOther(medVal)
  
  //   setSaved(false)
  //   setSaveStatus('default')
  // }

  useEffect(() => {
    getPainLevel()
    if(sessionStorage.getItem('painlevel-collapse')) {
      setCollapse(JSON.parse(sessionStorage.getItem('painlevel-collapse')))
    }
  }, [])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return (
    <div className="box-container-numbered collapsable">
      <div onClick={handleCollapse}>
        <h4 className="numbered-subheading">
          {lang === "English" ? 
            "1. In the past 7 days, how much pain on average have you had because of your arthritis?" : 
            "1. Au cours des 7 derniers jours, combien de douleur avez-vous eu en moyenne à cause de votre arthrite?"}
          <span className="collapsed-icon">{collapse ? "▲" : "(Expand) ▼"}</span>
        </h4>
      </div>

      <Collapse isOpen={collapse}>
         {/* <SliderControl
          setValue={setValue} 
          minLabel="No Pain" 
          maxLabel="Extreme Pain" 
          forSlider="pain-level"
          reversed={true}
          value={painLevel}
        >
        </SliderControl> */}
         
           {/* <h4 class="text-left-right">
             <span class="left-text">No Pain</span>
             <span class="byline">Extreme Pain</span>
             </h4> */}
          
           <CircleControl 
            setValue={setValue} 
            minLabel="No Pain" 
            maxLabel="Extreme Pain" 
            reversed={true}
            value={painLevel}
            forSlider="pain-level">

           </CircleControl>
      </Collapse>
    </div>
  )
}

export default QstepOne