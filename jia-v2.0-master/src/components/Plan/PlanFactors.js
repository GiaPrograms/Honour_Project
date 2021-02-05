/**
 * @file
 * Component for step 4 Plan "4. Will any of these factors prevent you from following your new plan? section
 * Contains the UI, fetches factors list and the user selection(s)
 * @author <akel.ms93@gmail.com>
 */

import React, {useState, useEffect} from "react";
import {getRequest} from "../../API/ApiHandler"

const PlanFactors = ({selectedFactors, setSelectedFactors, setSaved, setSaveStatus}) => {
  const [factors, setFactors] = useState([])

  const getFactors = async() => {
    let data = await getRequest("/factors")
    if(data) setFactors(data)
  }

  const getUserFactors  = async() => {
    let data = await getRequest(`/userFactors/user`)
    if(data) handleSelected(data)
  }

  const handleSelected = factors => {
    // Get check boxes
    const factorCheckBoxes = document.querySelectorAll(".factor")
    const factorsId = factors.map(factor => {
      // Check selected factor boxes
      factorCheckBoxes.forEach(el => {
        if (el.value === factor.title) {
          el.checked = true
          document.getElementById(`${factor.title}-desc`).style.display="block"
        }
      })
      // get factor id's
      let id = {id: factor.id}
      return id
    })
    setSelectedFactors(factorsId)
  }

  const checkedFactor = ev => {
    let id = parseInt(ev.target.id)
    if(ev.target.checked) {
      setSelectedFactors(prev => [...prev, {id}])
      document.getElementById(`${ev.target.value}-desc`).style.display="block"
    } else {
      setSelectedFactors(selectedFactors.filter(el => el.id !== id))
      document.getElementById(`${ev.target.value}-desc`).style.display="none"
    }
    setSaved(false)
    setSaveStatus('default')
  }

  useEffect(() => {
    getFactors()
    getUserFactors()
  },[])

  const factorItems = factors.length > 0 && factors.map(factor => (
    <div className="plan_factors" key={factor.id}>
      <div>
        <input
          id={factor.id}
          type="checkbox"
          className="factor"
          value={factor.title}
          onChange={checkedFactor}
        />
        <h5>{factor.title}</h5>
      </div>
      <p id={`${factor.title}-desc`} style={{display:"none"}}>{factor.description}</p>
    </div>
  ))

  return (
    <div className="box-container-numbered">
      <h4 className="numbered-subheading">
        4. Will any of these factors prevent you from following your new plan?
        <span>(Check all that apply)</span>
      </h4>
      <div className="padding-class">
        {factorItems}
      </div>
    </div>
  )
}

export default PlanFactors
