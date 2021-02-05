/**
 * @file
 * Component for step 3 "Review & select treatment options"
 * Contains the "My Favourites" tab section
 * @author <akel.ms93@gmail.com>
 */

import React, {useState, useEffect} from 'react';
import {Row} from "reactstrap";
import TreatmentCard from '../TreatmentCard'

const Favourites = ({favs, setFavs, treatments}) => {
  const [favsList, setFavsList] = useState([])

  useEffect(() => {
    // Get the treatments which are in the favourites list
    if (treatments && favs) {
      let filteredList = []
        favs.forEach(fav => {
          treatments.forEach(treatment => {
            if (treatment.id === fav.id) filteredList.push(treatment)
          })
      })
     setFavsList(filteredList)
    }
  },[treatments, favs])

   // Treatment card list
   const treatmentCards = favsList.length && 
   favsList.map(treatment => 
      <TreatmentCard
        key={treatment.id} 
        treatment={treatment}
        selected={favs}
        setSelected={setFavs}
        icon="fav"
      />
    )

  return(
    <React.Fragment>
      <div className="notice plan-top-notice">
        <h5>Please review your saved treatments below. Add or remove any favourites.</h5>
      </div>
      <div className="review-content">
        <Row className="padding-class">
          {favsList.length 
            ? treatmentCards
            : <h1>Your favourites list is empty</h1>
          }
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Favourites
