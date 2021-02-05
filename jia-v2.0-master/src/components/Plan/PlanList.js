/**
 * @file
 * Component for step 4 "Make your plan
 * Contains the "Choose the treatments in your plan" tab section
 * Fetches treatments in the user plan
 * @author <akel.ms93@gmail.com>
 */

import React, {useState, useEffect} from 'react';
import {Row} from "reactstrap";

import TreatmentCard from '../TreatmentCard'
import {getRequest} from "../../API/ApiHandler"

const PlanList = ({favs, treatments, plan, setPlan, setSaved, setSaveStatus}) => {
  const [favsList, setFavsList] = useState([])

  const getUserPlan = async () => {
    let data = await getRequest(`/userPlans/user`)
    if(data) {
      const ids = data.map(treatment => {return {id: treatment.id}})
      setPlan(ids)
    }
  }

  const handleFavourites = () => {
      let filteredList = []
      favs.forEach(fav => {
        treatments.forEach(treatment => {
          if (treatment.id === fav.id)  filteredList.push(treatment)
        })
      })
     setFavsList(filteredList)
  }
  
  useEffect(() => {
    getUserPlan()
  },[])

  useEffect(() => {
    if(treatments && favs) handleFavourites()
  },[treatments, favs])

  // Treatment card list
  const treatmentCards = favsList.length && 
  favsList.map(treatment => 
    <TreatmentCard
      key={treatment.id} 
      treatment={treatment}
      selected={plan}
      icon="checkbox"
      setPlan={setPlan}
      setSaved={setSaved}
      setSaveStatus={setSaveStatus}
    />
  )

  return(
    <div className="box-container-numbered plan-container">
      <h4 className="numbered-subheading">1. Choose the treatments in your plan</h4>
      <div className="notice plan-top-notice">
        <h5>Please review your favourites and choose the treatments you wish to try now.</h5>
      </div>
      <div className="review-content">
        <Row className="padding-class">
          {favsList.length 
            ? treatmentCards
            : <h1>Your favourites list is empty</h1>
          }
        </Row>
      </div>
      <div className="notice plan-bottom-notice">
        <h5>You can go back to the “Review and Select” tab to add treatments.</h5>
      </div>
    </div>
  )
}

export default PlanList
