import React, { useState, useEffect } from 'react'
import {Collapse} from 'reactstrap';
import {getRequest} from "../../API/ApiHandler"
import warning from '../../img/warning.png';


const QStepFive = ({getHowOften, setSaved, setSaveStatus}) => {
  const [notAlways, setNotAlways] = useState()
  const [collapse, setCollapse] = useState(true)
  const [prescribed, setPrescribed] = useState()
  const [other, setOther] = useState()

  const checked = ev => {
    let buttonList = document.querySelectorAll(".StepFour-div div");
    buttonList.forEach(button => {
      button.style.backgroundColor = "";
    });
    ev.target.style.backgroundColor = "#10434F";
    let medVal = ev.target.getAttribute("value");
    switch (medVal) {
      case "Never":
      case "Sometimes":
      case "Half the time":
      case "Most times":
        setNotAlways(true)
        break;
      case "Not applicable":
      case "Always":
        setNotAlways(false)
        break;
      default:
        break;
    }
    setPrescribed(medVal)
    getHowOften(medVal, other)
    setSaved(false)
    setSaveStatus('default')
  }

  const checkedTwo = ev => {
    let buttonList = document.querySelectorAll(".StepFour-div-other div");
    buttonList.forEach((button) => {
      if (button.style.backgroundColor) button.style.backgroundColor = ""
    });
    ev.target.style.backgroundColor = "#10434F";

    let medVal = ev.target.getAttribute("value")
    setOther(medVal)
    getHowOften(prescribed, medVal)
    setSaved(false)
    setSaveStatus('default')
  }

  const getValues = async () => {
    let {data:{frequently}} = await getRequest(`/frequently/user`)
    if(frequently){
      setPrescribed(frequently.prescribed_meds)
      setOther(frequently.other_treatments)
      highlightSelected(frequently.prescribed_meds, frequently.other_treatments)
    }
  }

  const highlightSelected = (pres, other) => {
    let prescribedBtns = document.querySelectorAll(".StepFour-div div")
    prescribedBtns.forEach(button => {
      if (button.getAttribute("value") === pres) {
        button.style.backgroundColor = "#10434F"
        if(pres !== "Not applicable" && pres !== 'Always') setNotAlways(true)
      }
    })

    let otherBtns = document.querySelectorAll(".StepFour-div-other div")
    otherBtns.forEach(button => {
      if (button.getAttribute("value") === other) {
        button.style.backgroundColor = "#10434F"
      }
    })
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
    sessionStorage.setItem('howoften-collapse', !collapse)
  }

  useEffect(() => {
    getValues()
    if(sessionStorage.getItem('howoften-collapse')) {
      setCollapse(JSON.parse(sessionStorage.getItem('howoften-collapse')))
    }
  },[])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return(
    <React.Fragment>
      <div className="box-container-numbered collapsable">
        <div id="fifth" onClick={handleCollapse}>
          <h4 className="numbered-subheading">
            {lang === "English" ? 
            "5. How often do you use your treatments?" : 
            "5. À quelle fréquence utilisez-vous ces traitements?"}
            <span className="collapsed-icon">{collapse ? "▲" : "(Expand) ▼"}</span>
          </h4>
        </div>
        <Collapse isOpen={collapse}>
          <div className="padding-class">
          <div className="Step-group-container">
            <h4 className="Step-subHeading">
              {lang === "English" ? 
              "Prescribed arthritis medication" : 
              "Médicaments sous ordonnance contre l’arthrite"}
            </h4>
            <div className="StepFour-div-group">
              <div className="StepFour-div">
                <label>{lang === "English" ? "Never" : "Jamais"}</label>
                <div value="Never" onClick={checked}></div>
              </div>
              <div className="StepFour-div">
                <label>{lang === "English" ? "Sometimes" : "Parfois"}</label>
                <div value="Sometimes" onClick={checked}></div>
              </div>
              <div className="StepFour-div">
                <label>{lang === "English" ? "Half the time" : "La moitié du temps"}</label>
                <div value="Half the time" onClick={checked}></div>
              </div>
              <div className="StepFour-div">
                <label>{lang === "English" ? "Most times" : "La plupart du temps"}</label>
                <div value="Most times" onClick={checked}></div>
              </div>
              <div className="StepFour-div">
                <label>{lang === "English" ? "Always" : "Toujours"}</label>
                <div value="Always" onClick={checked}></div>
              </div>
              <div className="StepFour-div">
                <label>{lang === "English" ? "Not applicable" : "Sans objet"}</label>
                <div value="Not applicable" onClick={checked}></div>
              </div>
            </div>
            {notAlways &&
            <React.Fragment>
              <div className="Notice text-center">
                <img src={warning} alt="warning icon"/>
                <h5>
                  {lang === "English" ? 
                  "If you aren't using your treatments as prescribed by your doctor, you may have more pain." : 
                  "Si vous n'utilisez pas vos traitements tels que prescrits par votre médecin, vous pourriez avoir plus de douleur."}
                </h5>
                <p>
                  {lang === "English" ? 
                  "Make sure to discuss any changes or concerns with your doctor to decide what is best." : 
                  "Assurez-vous de discuter de tout changement ou de toute préoccupation avec votre médecin pour décider de ce qui est le mieux."}
                </p>
                <div value="GotIt" id="GotIt-div">
                  <p value="GotIt" onClick={() => {setNotAlways(false)}} id="GotIt">{lang === "English" ? "Got it" : "J'ai compris"}</p>
                </div>
              </div>
            </React.Fragment> 
            }
          </div>

          <div className="StepFour-treatment-h4-div">
            <div className="Step-group-container">
              <h4 className="Step-subHeading">{lang === "English" ? "Other pain treatments" : "Autres traitements pour la douleur"}</h4>
              <div className="StepFour-div-group other">
                <div className="StepFour-div-other">
                  <label>{lang === "English" ? "Never" : "Jamais"}</label>
                  <div value="Never" onClick={checkedTwo}></div>
                </div>
                <div className="StepFour-div-other">
                  <label>{lang === "English" ? "Sometimes" : "Parfois"}</label>
                  <div value="Sometimes" onClick={checkedTwo}></div>
                </div>
                <div className="StepFour-div-other">
                  <label>{lang === "English" ? "Half the time" : "La moitié du temps"}</label>
                  <div value="Half the time" onClick={checkedTwo}></div>
                </div>
                <div className="StepFour-div-other">
                  <label>{lang === "English" ? "Most times" : "La plupart du temps"}</label>
                  <div value="Most times" onClick={checkedTwo}></div>
                </div>
                <div className="StepFour-div-other">
                  <label>{lang === "English" ? "Always" : "Toujours"}</label>
                  <div value="Always" onClick={checkedTwo}></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  )
}

export default QStepFive