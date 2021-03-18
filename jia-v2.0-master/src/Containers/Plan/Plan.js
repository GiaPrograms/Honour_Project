import React, {useState, useEffect} from 'react'
import {useBeforeunload} from 'react-beforeunload';
import Header from '../../components/Home/Header'
import Footer from "../../components/Footer";
import PlanList from '../../components/Plan/PlanList'

import PlanFactors from "../../components/Plan/PlanFactors"
import PlanSuggestions from '../../components/Plan/PlanSuggestions';
import PlanReview from '../../components/Plan/PlanReview';
import HowMotivated from '../../components/Plan/HowMotivated';
import HowConfident from '../../components/Plan/HowConfident';

import TranslateButtonEN from "../../components/UI/TranslateButtonEN";
import TranslateButtonFR from "../../components/UI/TranslateButtonFR";
import SaveButton from "../../components/UI/SaveButton";
import DialogBox from '../../components/UI/DialogBox';
import Subheader from '../../components/UI/Subheader/Subheader';
import NavigationButton from '../../components/UI/Buttons/NavigationButton';
import NavigationDialog from "../../components/UI/NavigationDialog"
import FailedSaveDialog from "../../components/UI/FailedSaveDialog";

import {updateLogPlan, updateLogStepThree} from "../../components/HandleUserLog"
import {getRequest, postRequest} from "../../API/ApiHandler"

const Plan = props => {
  const [plan, setPlan] = useState([])
  const [motivationLevel, setMotivationLevel] = useState(7)
  const [confidenceLevel, setConfidenceLevel] = useState(7)
  const [userFactors, setUserFactors] = useState([])
  const [userSuggestions, setUserSuggestions] = useState([])
  const [review, setReview] = useState()

  const [favs, setFavs] = useState([])
  const [treatments, setTreatments] = useState([])
  const [saved, setSaved] = useState(true)
  const [displayNavDialog, setDisplayNavDialog] = useState(false)
  const [navBy, setNavBy] = useState('')
  const [navTo, setNavTo] = useState('')
  const [didSelect, setDidSelect] = useState(false)

  const [saveStatus, setSaveStatus] = useState('default')
  const [open, setOpen] = useState(false)

  // Check if there are unsaved changed when user attempts to close or refresh page and display a message.
  useBeforeunload(event => {
    if(!saved) event.preventDefault()
  })

  // TODO: Set a single source of truth for treatments and favourites
  const getUserFavourite = async() => {
    let data = await getRequest(`/userFavourites/user`)
    if(data) {
      const ids = data.map(treatment => {return {id: treatment.id}})
      setFavs(ids)
    }
  }

  const getTreatments = async() => {
    let data = await getRequest("/treatments")
    if(data.length > 0) setTreatments(data)
  }

  // Save values on save button click
  const saveHandler = async() => {
    await Promise.all([
      savePlanList(),
      saveMotivationLevel(),
      saveConfidenceLevel(),
      saveUserFactors(),
      saveUserSuggestions(),
      saveReview(),
    ]).then(data => {
      let failed = data.indexOf() !== -1
      if(!failed) {
        updateLog()
        setSaved(true)
        setSaveStatus('success')
      } else {
        setSaveStatus('default')
        setOpen(true)
      }
    })
  }

  const updateLog = async() => {
    updateLogPlan(plan)
    let factors = await getRequest(`/userFactors/user`)
    if(factors) {
      factors = factors.map(el => {
        let title = {title: el.title}
        return title
      })
    }

    let suggestions = await getRequest(`/userSuggestions/user`)
    if(suggestions) {
      suggestions = suggestions.map(el => {
        let title = {title: el.title}
        return title
      })
    }

    const data = {
      motivation_level: motivationLevel,
      confidence_level: confidenceLevel,
      factors,
      suggestions
    }
    updateLogStepThree(data)
  }

  const savePlanList = () => {
    const input = {plan}
    return postRequest("/userPlans", input, setSaveStatus)
  }

  const saveMotivationLevel = () => {
    const input = {level: motivationLevel}
    return postRequest("/motivations", input, setSaveStatus)
  }

  const saveConfidenceLevel = () => {
    const input = {level: confidenceLevel}
    return postRequest("/confidence", input, setSaveStatus)
  }

  const saveUserFactors = () => {
    const input = {selectedFactors: userFactors}
    return postRequest("/userFactors", input, setSaveStatus)
  }

  const saveUserSuggestions = () => {
    const input = {selectedSuggestions: userSuggestions,}
    return postRequest("/userSuggestions", input, setSaveStatus)
  }

  const saveReview = () => {
    const input = {selection: review,}
    return postRequest("/reviews", input, setSaveStatus)
  }

  const handleNavigation = () => {
    if(saved) {
      props.history.push(`/summary`)
    } else {
      setNavBy('button')
      setDisplayNavDialog(true)
    }
  }

  const handleStepperNav = to => {
    if(saved) {
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
      ? props.history.push(`/whats-important-to-you`) 
      : props.history.push(navTo)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    if(localStorage.getItem('s4Trial')) setDidSelect(true)
    getTreatments()
    getUserFavourite()
  },[])

  return (
    <div className="wrapper">
      <div className='page-header'>
        <Header current={props} handleNav={handleStepperNav} setNavTo={setNavTo}/>
      </div>
      <Subheader title="Make your plan"/>
      <div className="body-container">
        {/* <div className="btn-container">
          <div className="btn-container-elem"> <TranslateButtonEN/> </div>
          <div className="btn-container-elem"> <TranslateButtonFR/> </div>
          <div className="btn-container-elem"> <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/> </div>
        </div> */}
        <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/>
        <PlanList 
          favs={favs}
          treatments={treatments}
          plan={plan}
          setPlan={setPlan}
          setSaved={setSaved}
          setSaveStatus={setSaveStatus}
        />
        <HowMotivated
          motivationLevel={motivationLevel}
          setMotivationLevel={setMotivationLevel}
          setSaved={setSaved}
          setSaveStatus={setSaveStatus}
        />
        <HowConfident 
          confidenceLevel={confidenceLevel}
          setConfidenceLevel={setConfidenceLevel}
          setSaved={setSaved}
          setSaveStatus={setSaveStatus}
        />
        <PlanFactors 
          selectedFactors={userFactors}
          setSelectedFactors={setUserFactors}
          setSaved={setSaved}
          setSaveStatus={setSaveStatus}
        />
        <PlanSuggestions 
          selectedSuggestions={userSuggestions}
          setSelectedSuggestions={setUserSuggestions}
          setSaved={setSaved}
          setSaveStatus={setSaveStatus}
        />
        <PlanReview
          review={review}
          setReview={setReview}
          setSaved={setSaved}
          setSaveStatus={setSaveStatus}
        />
        {/* <div className="btn-container">
          <div className="btn-container-elem"> <TranslateButtonEN/> </div>
          <div className="btn-container-elem"> <TranslateButtonFR/> </div>
          <div className="btn-container-elem"> <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/> </div>
        </div> */}
        <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/>
      </div>
      {/* Component for navigation button and title above the button */}
      <NavigationButton 
        title={`Now that you have made your \n plan, here is your summary`}
        btnText="Continue to Your Summary"
        handleNavigation={handleNavigation}
      />
      <Footer/>
      {!didSelect && <DialogBox description="Your plan will be saved in the trial database. You can modify your plan as needed." step='s4Trial'/>}
      <NavigationDialog open={displayNavDialog} handleClose={closeNavDialog}/>
      <FailedSaveDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Plan