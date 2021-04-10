import React, {useState, useEffect} from 'react';
import Header from '../../components/Home/Header';
import AllTreatments from "../../components/Review/AllTreatments";
import Recommendations from "../../components/Review/Recommendations";
import Favourites from "../../components/Review/Favourites";
import TabNavReview from '../../components/Review/TabNavReview';
import BottomTabNavReview from '../../components/Review/BottomTabNavReview';

import Footer from "../../components/Footer";
import Subheader from '../../components/UI/Subheader/Subheader';
import NavigationButton from '../../components/UI/Buttons/NavigationButton';
import {getRequest} from "../../API/ApiHandler"

const ReviewAndSelect = props => {
  const [treatments, setTreatments] = useState([])
  const [favourites, setFavourites] = useState()
  const [navTo, setNavTo] = useState('')

  const getUserFavourite = async() => {
    let data = await getRequest(`/userFavourites/user`)
    if(data) {
      const ids = data.map(treatment => {return {id: treatment.id}})
      setFavourites(ids)
    }
  }

  const getTreatments = async() => {
    let data = await getRequest("/treatments")
    if(data.length > 0) setTreatments(data)
  }

  const handleStepperNav = to => {
    props.history.push(to)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getTreatments()
    getUserFavourite()
  },[])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return (
    <div className="reviewDiv wrapper">
      <div className='page-header'>
        <Header current={props} handleNav={handleStepperNav} setNavTo={setNavTo}/>
      </div>
      <Subheader title={lang === "English" ? "Review & select treatment options" : "Examiner et sélectionner les options de traitement"}/>
      <div className="body-container">
        <TabNavReview current={props}/>
        <div className="review-box-container">
          {/* RECOMMENDATIONS COMPONENT */}
          {props.match.params.tab === "recommendations" && 
            <Recommendations 
              favs={favourites}
              setFavs={setFavourites}
              treatments={treatments}
            />
          }
          {/* ALL TREATMENTS COMPONENT */}
          {props.match.params.tab === "allTreatments" && 
            <AllTreatments 
              favs={favourites}
              setFavs={setFavourites}
              treatments={treatments}
            />
          }
          {/* FAVOURITES COMPONENT */}
          {props.match.params.tab === "favorites" && 
            <Favourites 
              favs={favourites}
              setFavs={setFavourites}
              treatments={treatments}
            />
          }
        </div>
        <BottomTabNavReview current={props}/>
      </div>
      <NavigationButton 
        title={lang === "English" ? 
              <>If you wish to see more options, you can also click on the <strong>“All Treatments”</strong><br/>tab or go back to change your preferences in Step 2.</> : 
              <>Pour voir plus d’options, vous pouvez cliquer sur  <strong>“Tous les traitements”</strong><br/>ou revenir à l’étape 2 pour modifier vos préférences.</>}
        btnText={lang === "English" ? "Continue to Step 4" : "Passez à l'étape 4"}
        path="/make-your-plan"
      />
      <Footer/>
    </div>
  )
}

export default ReviewAndSelect 
