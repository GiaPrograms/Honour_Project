import React, {useState, useEffect} from 'react'
import HumansvgTest from './HumansvgTest';
import {Collapse} from 'reactstrap';

const QstepTwo = ({setPainAreas, setSaved, setSaveStatus}) => {
  const [collapse, setCollapse] = useState(true)

  const handleCollapse = () => {
    setCollapse(!collapse)
    sessionStorage.setItem('areas-collapse', !collapse)
  }
  
  useEffect(() => {
    if(sessionStorage.getItem('areas-collapse')) {
      setCollapse(JSON.parse(sessionStorage.getItem('areas-collapse')))
    }
  }, [])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return (
    <div className="pain-div box-container-numbered collapsable">
      <div onClick={handleCollapse}>
        <h4 className="numbered-subheading">
          {lang === "English" ? 
          "2. Where is your pain?" : 
          "2. Où est votre douleur?"}
          <span className="collapsed-icon">{collapse ? "-" : "+"}</span>
        </h4>
      </div>

      <Collapse isOpen={collapse}>
        <div className="padding-class">
          <p>{lang === "English" ? 
            "Select all the parts of your body where you have had pain in the past 7 days" : 
            "Sélectionnez toutes les parties de votre corps où vous avez eu des douleurs au cours des 7 derniers jours?"}</p>
          <HumansvgTest setPainAreas={setPainAreas} setSaved={setSaved} setSaveStatus={setSaveStatus}/>
        </div>
      </Collapse>
    </div>
  )
}

export default QstepTwo;
