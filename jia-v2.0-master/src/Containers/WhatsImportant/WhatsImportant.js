import React, { useState, useEffect } from 'react'
import {useBeforeunload} from 'react-beforeunload';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Footer from "../../components/Footer";

import SliderControl from '../../components/UI/Slider/SliderControl';
import Header from '../../components/Home/Header';
import DialogBox from "../../components/UI/DialogBox";
import TranslateButtonEN from "../../components/UI/TranslateButtonEN";
import TranslateButtonFR from "../../components/UI/TranslateButtonFR";
import SaveButton from "../../components/UI/SaveButton";
import {handleRecommendations} from "../../components/GenerateRecommendations"
import Subheader from '../../components/UI/Subheader/Subheader';
import NavigationButton from '../../components/UI/Buttons/NavigationButton';
import NavigationDialog from "../../components/UI/NavigationDialog"
import FailedSaveDialog from '../../components/UI/FailedSaveDialog';
import {updateLogPrefs} from "../../components/HandleUserLog"
import {getRequest, postRequest} from "../../API/ApiHandler"

const theme = createMuiTheme({
  palette: {primary: {main: '#10434F'},
  },
});

const WhatsImportant = props => {
  const [sliders, setSliders] = useState([])
  const [preferenceText, setPreferenceText] = useState()
  const [saved, setSaved] = useState(true)
  const [displayNavDialog, setDisplayNavDialog] = useState(false)
  const [navBy, setNavBy] = useState('')
  const [navTo, setNavTo] = useState('')
  const [didSelect, setDidSelect] = useState(false)
  const [saveStatus, setSaveStatus] = useState('default')
  const [open, setOpen] = useState(false)

  const [isLoading, setIsLoading] = useState()

  // Check if there are unsaved changed when user attempts to close or refresh page and display a message.
  useBeforeunload(event => {
    if(!saved) event.preventDefault()
  })
  
  // Get the what's important sliders from the DB
  const getPrefs = async () => {
    let data = await getRequest("/preferences")
    if (data) data.forEach(el => el.value = 7)
    setSliders(prefs => ([...prefs, ...data]))
    setIsLoading(false)
  }

  const getUserPrefs = async() => {
    let preferences = await getRequest(`/userPreferences/user`)
    if(preferences) {
      const prefs = preferences.map(pref => {
        return {
          id: pref.user_preference.preferenceId,
          value: pref.user_preference.value,
        }
        })
        let setUserValues = sliders.map(slider => {
          prefs.forEach(el => {
            if(el.id === slider.id) slider.value = el.value
          })
          return slider
        })
      setSliders(setUserValues)
    }
  }

  const getPreferenceText = async() => {
    let text = await getRequest(`/preferenceText/user`)
    if(text) setPreferenceText(text.text)  
  }

  const saveHandler = async() => {
    await Promise.all([
      savePrefs(),
      savePrefText()
    ]).then(data => {
      let failed = data.indexOf() !== -1
      if(!failed) {
        handleRecommendations()
        updateLog()
        setSaveStatus('success')
        setSaved(true)
      } else {
        setSaveStatus('default')
        setOpen(true)
      }
    })
  }

  const updateLog = () => {
    let prefs = sliders.map(el => {
      let data = {
        description: el.description,
        value: el.value
      }
      return data
    })

    const data = {
      prefs: prefs,
      preference_text: preferenceText,
    }
    updateLogPrefs(data)
  }

  const savePrefs = () => {
    const input = {sliders: sliders}
    return postRequest("/userPreferences", input, setSaveStatus)
  }

  const savePrefText = () => {
    const input = {text: preferenceText}
    return postRequest("/preferenceText", input)
  }

  const setValue = (value, ...others) => {
    const id = others[0]
    sliders.forEach(slider => {
      if(id === slider.id) {
        slider.value = value
      }
    })
    setSaved(false)
    setSaveStatus('default')
  }

  const handleTextChange = ev => {
    const text = ev.target.value
    setPreferenceText(text)      
    setSaved(false)
    setSaveStatus('default')
  }

  const handleButtonNav = () => {
    if(saved) {
      props.history.push(`/review-and-select`)
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
    if(localStorage.getItem('s2Trial')) setDidSelect(true)
    setIsLoading(true)
    getPrefs()
    getPreferenceText()
  }, [])

  useEffect(() => {
    if(!isLoading) getUserPrefs()
  }, [isLoading])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  return(
    <div className="wrapper">
      <div className='page-header'>
        <Header current={props} handleNav={handleStepperNav} setNavTo={setNavTo}/>
      </div>
      <Subheader title={lang === "English" ? "What's important to you" : "Ce qui est important pour vous"}/>
        <div className="body-container">
          {/* <div className="btn-container">
            <div className="btn-container-elem"> <TranslateButtonEN/> </div>
            <div className="btn-container-elem"> <TranslateButtonFR/> </div>
            <div className="btn-container-elem"> <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/> </div>
          </div> */}
          <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/>
          <div className="slider-component-div box-container">
            {sliders.length && sliders.map((slider, index) => (
              <div key={slider.id}>
                <h4>{index+1}. {slider.description}</h4>
                <SliderControl 
                  setValue={setValue} 
                  minLabel={slider.left_label}
                  maxLabel={slider.right_label}
                  sliderId={slider.id} 
                  reversed={slider.reversed}
                  value={slider.value}
                />
              </div>
            ))

            }
            <h4>7. Considering other factors. </h4>
            <ThemeProvider theme={theme}>
            <TextField
                onChange={handleTextChange}
                className="text-field"
                label="Please Explain"
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
                value={preferenceText ? preferenceText : ''}
                InputLabelProps={{
                  shrink: true,
                }}
                rows="6"
                id="consider-other-factors"
            />
            </ThemeProvider>
        </div>
        {/* <div className="btn-container">
          <div className="btn-container-elem"> <TranslateButtonEN/> </div>
          <div className="btn-container-elem"> <TranslateButtonFR/> </div>
          <div className="btn-container-elem"> <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/> </div>
        </div> */}
        <SaveButton saveHandler={saveHandler} saveStatus={saveStatus}/>
      </div>
      {/* Component for navigation button and title above the button */}
      <NavigationButton 
        title={`Now that you have considered what is important to you,\n you can review and select treatment options`}
        btnText="Continue to Step 3"
        handleNavigation={handleButtonNav}
      />
      <Footer/>
      {!didSelect && <DialogBox description="The selected information will be saved in the trial database. You can modify the information as needed." step='s2Trial'/>}
      <NavigationDialog open={displayNavDialog} handleClose={closeNavDialog}/>
      <FailedSaveDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default WhatsImportant;
