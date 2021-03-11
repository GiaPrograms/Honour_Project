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
import NavigationButton from '../UI/Buttons/NavigationButton';


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

    let medVal = ev.target.getAttribute("value")
    setOther(medVal)
  
    setSaved(false)
    setSaveStatus('default')
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
        {/* <SliderControl 
          setValue={setValue} 
          minLabel="No Pain" 
          maxLabel="Extreme Pain" 
          forSlider="pain-level"
          reversed={true}
          value={painLevel}
        /> */}

            {/* <h4 className="Step-subHeading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            No Pain &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Extreme Pain</h4>  */}


            <h4 class="text-left-right">
            <span class="left-text">No Pain</span>
            <span class="byline">Extreme Pain</span>
            </h4>
            
            <div className="StepFour-div-group other">
            <div className="StepFour-div-other">
                <label>0</label>
                <div value="Pain0" onClick={checkedZero}></div>
                
              </div>
              <div className="StepFour-div-other">
                <label>1</label>
                <div value="Pain1" onClick={checkedOne}></div>
                
              </div>
              <div className="StepFour-div-other">
                <label>2</label>
                <div value="Pain2" onClick={checkedTwo}></div>
              </div>
              <div className="StepFour-div-other">
                <label>3</label>
                <div value="Pain3" onClick={checkedThree}></div>
              </div>
              <div className="StepFour-div-other">
                <label>4</label>
                <div value="Pain4" onClick={checkedFour}></div>
              </div>
              <div className="StepFour-div-other">
                <label>5</label>
                <div value="Pain5" onClick={checkedFive}></div>
              </div>
            </div> 
      </Collapse>
    </div>
  )
}

export default QstepOne