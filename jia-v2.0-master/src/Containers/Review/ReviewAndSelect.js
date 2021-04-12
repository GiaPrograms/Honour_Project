import React, {useState, useEffect} from 'react';
import Header from '../../components/Home/Header';
import AllTreatments from "../../components/Review/AllTreatments";
import Recommendations from "../../components/Review/Recommendations";
import Favourites from "../../components/Review/Favourites";
import TabNavReview from '../../components/Review/TabNavReview';
import BottomTabNavReview from '../../components/Review/BottomTabNavReview';
import DialogBox from "../../components/UI/DialogBox";
import FailedSaveDialog from "../../components/UI/FailedSaveDialog";

import Footer from "../../components/Footer";
import Subheader from '../../components/UI/Subheader/Subheader';
import NavigationButton from '../../components/UI/Buttons/NavigationButton';
import {getRequest} from "../../API/ApiHandler"
import NavigationDialog from "../../components/UI/NavigationDialog"

const ReviewAndSelect = props => {
  const [treatments, setTreatments] = useState([])
  const [favourites, setFavourites] = useState()
  const [navTo, setNavTo] = useState('')
  const [navBy, setNavBy] = useState('')
  const [saved, setSaved] = useState(true)
  const [displayNavDialog, setDisplayNavDialog] = useState(false)
  const [didSelect, setDidSelect] = useState(false)
  const [open, setOpen] = useState(false)
  
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

  // const handleStepperNav = to => {
  //   props.history.push(to)
  // }

  const handleButtonNav = () => {
    if (saved) {
      props.history.push(`/make-your-plan`)
    } else {
      setNavBy('button')
      setDisplayNavDialog(true)
    }
  }

  const handleStepperNav = to => {
    if (saved) {
      props.history.push(to)
    } else {
      setNavBy('stepper')
      setDisplayNavDialog(true)
    }
  }

  const closeNavDialog = selection => {
    selection === 0
      ? setDisplayNavDialog(false)
      : navBy === "button"
        ? props.history.push(`/review-and-select`)
        : props.history.push(navTo)
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
        title={<>If you wish to see more options, you can also click on the <strong>“All Treatments”</strong><br/>tab or go back to change your preferences in Step 2.</>}
        btnText="Continue to Step 4"
        handleNavigation={handleButtonNav}
      />
      <Footer/>
      {/* {!didSelect && <DialogBox description="The selected information will be saved in the trial database. You can modify the information as needed." step='s3Trial' />}
      <NavigationDialog open={displayNavDialog} handleClose={closeNavDialog} />
      <FailedSaveDialog open={open} setOpen={setOpen} /> */}
    </div>
  )
}

export default ReviewAndSelect 
