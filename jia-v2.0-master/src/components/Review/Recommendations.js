import React, {useState, useEffect} from 'react';
import {Row} from "reactstrap";

import TreatmentCard from '../TreatmentCard'
import {handleRecommendations} from "../../components/GenerateRecommendations"
import {getRequest} from "../../API/ApiHandler"

const Recommendations = ({favs, setFavs}) => {
  const [topThreeSC, setTopThreeSC] = useState()
  const [topThreeHCP, setTopThreeHCP] = useState()
  const [favourites, setFavourites] = useState()

  const getUserSC = async() => {
    let data = await getRequest(`/userScs/user`)
    if(data.length) {
      setTopThreeSC(data)
    } else {
      await handleRecommendations()
      getUserSC()
    }
  }

  const getUserHCP = async() => {
    let data = await getRequest(`/userHcps/user`)
    if(data.length) {
      setTopThreeHCP(data)
    } else {
      await handleRecommendations()
      getUserHCP()
    }
  }

  useEffect(() => {
    getUserSC()
    getUserHCP()
  },[])

  useEffect(() => {
    if(favs) setFavourites(favs)
  },[favs])

  const topThreeSCList = topThreeSC && 
    topThreeSC.map(treatment => 
      <TreatmentCard
        key={treatment.id} 
        treatment={treatment}
        selected={favs}
        setSelected={setFavs}
        icon="fav"
      />
    )

  const topThreeHCPList = topThreeHCP && 
    topThreeHCP.map(treatment => 
      <TreatmentCard
        key={treatment.id} 
        treatment={treatment}
        selected={favourites}
        setSelected={setFavs}
        icon="fav"
      />
    )

  return (
    <React.Fragment>
      <div className="notice">
        <h5>
          Below is a list of your best matches.
        </h5>
        <h5>
          These depend on where you have pain, the types of treatments you prefer and what the scientific studies have shown.
        </h5>
        <h5>
          Review the treatments and save those you prefer to your favorites.
        </h5>
      </div>
      <div className="review-content">
        {/*****************
         SC TREATMENTS
          ******************/}
        <div className="title-padding">
          <h4>Treatments you could try now</h4>
        </div>
        <Row className="card-row">
          {topThreeSCList}
        </Row>
      </div>
      {/*****************
       HCP TREATMENTS
        ******************/}
      <div className="review-content">
        <div className="title-padding">
          <h4>Treatments you could discuss with your health care team before trying</h4>
        </div>
        <Row className="card-row">
          {topThreeHCPList}
        </Row>
      </div>
      <div className="notice review-description-div">
        <div className="disclaimer">
          <img src={require(`../../img/warning.png`)} alt="warning"/>
          <div>
            <p>Please consider the benefits, risks and how easy it is to use the treatments
              before making a selection. You can also discuss it with your health care team.</p>
            <p>Keep taking your prescribed treatments so that your arthritis does not get worse.</p>
          </div>
        </div>
      </div>
      <div className="notice">
        <h5>You can click on the “All Treatments” tab to see all treatments, or click on the “My Favourites” tab to review your favourites.</h5>
      </div>
    </React.Fragment>
  )
}

export default Recommendations