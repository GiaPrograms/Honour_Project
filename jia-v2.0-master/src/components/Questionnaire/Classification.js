import React, {useState, useEffect} from 'react'
import ClassificationButton from './ClassificationButton'
import {getRequest} from "../../API/ApiHandler"

const Classification = ({id, classification, selectedMeds, setSelectedMeds, setSaved, setSaveStatus}) => {
  const [medications, setMedications] = useState([])

  const getMedications = async() => {
    let {data} = await  getRequest("/medications")
    setMedications(data)
  }

  useEffect(() => {
    getMedications()
  },[])

  const classificationContent = (medications.length > 0) &&
  medications.filter(med => {
     if(med.classification_id === id) return true
     return false
  }).map(med => 
    <ClassificationButton 
      key={med.id}
      med={med}
      selectedMeds = {selectedMeds} 
      setSelectedMeds = {setSelectedMeds}
      setSaved={setSaved}
      setSaveStatus={setSaveStatus}
    />
  )

  return(
    <div className="StepTwo-div other">
      <h4 className="Step-subHeading">{classification}</h4>
      <div>
        {classificationContent.length 
          ? classificationContent 
          : <h4 style={{padding: '1.5rem'}}>There are currently no items listed under this classification</h4>}
      </div>
    </div>
  )
}

export default Classification