import React, { useState, useEffect } from 'react'
import SliderControl from '../UI/Slider/SliderControl';
import {Collapse} from 'reactstrap';
import {getRequest} from "../../API/ApiHandler"

const QStepSix = ({controlArthritis, setControlArthritis, managePain, setManagePain, setSaved, setSaveStatus})  => {
  const [collapse, setCollapse] = useState(true)
  const [other, setOther] = useState()

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
    getSlidersValues()
    if(sessionStorage.getItem('howwell-collapse')) {
      setCollapse(JSON.parse(sessionStorage.getItem('howwell-collapse')))
    }
  }, [])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return(
    <React.Fragment>
      <div className="pain-div box-container-numbered collapsable">
        <div id="sixth" onClick={handleCollapse}>
          <h4 className="numbered-subheading">
            {lang === "English" ? 
            "6. How well does your treatment ..." : 
            "6. Dans quelle mesure votre traitement ..."}
            <span className="collapsed-icon">{collapse ? "▲" : "(Expand) ▼"}</span>
          </h4>
        </div>
        <Collapse isOpen={collapse}>
          <div className="padding-class">
            {/* <h4>... control your arthritis?</h4>
            <SliderControl 
              setValue={setValue} 
              minLabel="Not Well at All"
              maxLabel="Very Well"
              forSlider="control-arthritis"
              reversed={false}
              value={controlArthritis}
            /> */}
            <h4>... control your arthritis?</h4>
            <h4 class="text-left-right">
            <span class="left-text">Not Well at All</span>
            <span class="byline">Very Well</span>
            </h4>
            
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

            <h4>... manage your pain?</h4>


            <h4 class="text-left-right">
            <span class="left-text">Not Well at All</span>
            <span class="byline">Very Well</span>
            </h4>
            
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
            {/* <SliderControl 
              setValue={setValue} 
              minLabel="Not Well at All" 
              maxLabel="Very Well"
              forSlider="manage-pain"
              reversed={false}
              value={managePain}
            /> */}

            
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  )
}

export default QStepSix