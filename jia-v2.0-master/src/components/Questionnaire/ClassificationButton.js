import React, { useEffect } from 'react'
import ButtonVals from '../ButtonVals'

const ClassificationButton = ({med, selectedMeds, setSelectedMeds, setSaved, setSaveStatus}) => {

  const clickHandler = ev => {
    let isSelected = ButtonVals(ev);
    if (isSelected) {
      let {id, name, classification} = med
      let _med = {id, name, classification}
      setSelectedMeds([...selectedMeds, _med])
    } else {
      setSelectedMeds(selectedMeds.filter(item => item.name !== med.name))
    }
    setSaved(false)
    setSaveStatus('default')
  }

  const highlightSelectedMeds = () => {
    selectedMeds.forEach(item => {
      if(item.name === med.name) {
        let button = document.getElementById(`${item.name}`);
        button.setAttribute("data-selected", true)
        button.style.backgroundColor = "#10434F";
        button.style.color = "#FFF";
      }
    })
  }

  useEffect(() => {
    highlightSelectedMeds()
  }, [])

  return(
    <button id={med.name} onClick={clickHandler}>
      {med.name}
    </button>
  )
}

export default ClassificationButton