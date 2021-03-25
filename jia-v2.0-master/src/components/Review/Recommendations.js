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

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return (
    <React.Fragment>
      <div className="notice">
        <h5>
          {lang === "English" ? "Below is a list of your best matches." : "Voici une liste de vos meilleurs matchs."}
        </h5>
        <h5>
          {lang === "English" ? 
          "These depend on where you have pain, the types of treatments you prefer and what the scientific studies have shown." : 
          "Ceux-ci dépendent de l'endroit où vous ressentez la douleur, des types de traitements que vous préférez et de ce que les études scientifiques ont montré."}
        </h5>
        <h5>
          {lang === "English" ? 
          "Review the treatments and save those you prefer to your favorites." : 
          "Passez en revue les traitements et enregistrez ceux que vous préférez dans vos favoris."}
        </h5>
      </div>
      <div className="review-content">
        {/*****************
         SC TREATMENTS
          ******************/}
        <div className="title-padding">
          <h4>{lang === "English" ? "Treatments you could try now" : "Traitements que vous pouvez essayer maintenant"}</h4>
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
          <h4>{lang === "English" ? 
              "Treatments you could discuss with your health care team before trying" : 
              "Traitements dont vous pourriez discuter avec votre équipe soignante avant d'essayer"}
          </h4>
        </div>
        <Row className="card-row">
          {topThreeHCPList}
        </Row>
      </div>
      <div className="notice review-description-div">
        <div className="disclaimer">
          <img src={require(`../../img/warning.png`)} alt="warning"/>
          <div>
            <p>
              {lang === "English" ? 
              "Please consider the benefits, risks and how easy it is to use the treatments before making a selection. You can also discuss it with your health care team." : 
              "Veuillez considérer les avantages, les risques et la facilité d'utilisation des traitements avant de faire une sélection. Vous pouvez également en discuter avec votre équipe soignante."}
            </p>
            <p>
              {lang === "English" ? 
              "Keep taking your prescribed treatments so that your arthritis does not get worse." : 
              "Continuez à prendre vos traitements prescrits afin que votre arthrite ne s'aggrave pas."}
            </p>
          </div>
        </div>
      </div>
      <div className="notice">
        <h5>
          {lang === "English" ? 
          "You can click on the “All Treatments” tab to see all treatments, or click on the “My Favourites” tab to review your favourites." : 
          "Vous pouvez cliquer sur l'onglet “Tous les traitements” pour voir tous les traitements, ou cliquer sur l'onglet “Mes favoris” pour consulter vos favoris."}
        </h5>
      </div>
    </React.Fragment>
  )
}

export default Recommendations