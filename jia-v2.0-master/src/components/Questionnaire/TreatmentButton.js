import React, { useEffect } from 'react'
import ButtonVals from '../ButtonVals'

const TreatmentButton = ({treatment, selectedTreatments, setSelectedTreatments, setSaved, setSaveStatus}) => {
  const clickHandler = ev => {
    let isSelected = ButtonVals(ev);
    if (isSelected) {
      let {id, name} = treatment
      let _treatment = {id, name}
      setSelectedTreatments([...selectedTreatments, _treatment])
    } else {
      setSelectedTreatments(selectedTreatments.filter(item => item.name !== treatment.name))
    }
    setSaved(false)
    setSaveStatus('default')
  }

  const highlightSelectedTreatments = () => {
    selectedTreatments.forEach(item => {
      if(item.name === treatment.name) {
   
        let button = document.getElementById(`${item.name}`);
        button.setAttribute("data-selected", true)
        button.style.backgroundColor = "#10434F";
        button.style.color = "#FFF";
      }
    })
  }

  useEffect(() => {
    highlightSelectedTreatments()
  }, [])

  return(
    <button id={treatment.name} onClick={clickHandler}>
      {treatment.name}
    </button>
  )
}

export default TreatmentButton