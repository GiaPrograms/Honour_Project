/**
 * @file
 * Component for step 3 "Review & select treatment options"
 * Contains the "All Treatments" tab section and @see CategoryTreatments component
 * Fetches treatments classifications
 * @author <akel.ms93@gmail.com>
 */

import React, {useState, useEffect} from 'react';
import CategoryTreatments from './CategoryTreatments'
import {getRequest} from "../../API/ApiHandler"

const AllTreatments = ({favs, setFavs, treatments}) => {
  const [classifications, setClassifications] = useState([])

  const getClassifications = async() => {
    let data = await getRequest("/treatmentClassifications")
    if(data) setClassifications(data)
  }

  useEffect(() => {
    if(treatments && favs) getClassifications()
  },[treatments, favs])

  const classificationsList = classifications.length &&
    classifications.map((classification) => (
      <CategoryTreatments
        key={classification.id}
        classification={classification}
        treatments={treatments}
        favs={favs}
        setFavs={setFavs}
      />
    ))

  return (
    <React.Fragment>
      <div className="notice">
        <h5>Below is a list of the categories of treatments that can be used for pain. If any of the treatments
          appeal to you, you can save them to your favourites.</h5>
      </div>
      <div className="review-content all-treatments-review">
        {classificationsList}
      </div>
      <div className="notice">
        <h5>You can click the “My Favourites” tab to review your favourites</h5>
      </div>
    </React.Fragment>
  )
}
export default AllTreatments
