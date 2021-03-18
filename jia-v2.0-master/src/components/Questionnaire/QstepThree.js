import React, {useState, useEffect} from 'react'
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {Collapse} from 'reactstrap';

import Classification from './Classification';
import {getRequest} from "../../API/ApiHandler"

const theme = createMuiTheme({
  palette: {
    primary: {main: '#10434F'},
  },
});

const QstepThree = ({selectedMeds, setSelectedMeds, prescribedText, setPrescribedText, setSaved, setSaveStatus}) => {
  const [classifications, setClassifications] = useState([])
  const [collapse, setCollapse] = useState(true)

  const getClassifications = async () => {
    let {data} = await getRequest("/classifications")
    setClassifications(data)
  }

  const getSelectedMeds = async() => {
    let meds = await getRequest(`/userMedications/user`)
    if(meds) {
      let {data} = meds
      setSelectedMeds(data)      
    }
  }

  const getPrescribedText = async() => {
    let text = await getRequest(`/prescribedText/user`)
    if(text) setPrescribedText(text.text)      
  }

  const handleTextChange = ev => {
    const text = ev.target.value;
    setPrescribedText(text)
    setSaved(false)
    setSaveStatus('default')
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
    sessionStorage.setItem('pres-collapse', !collapse)
  }
  

  useEffect(() => {
    getClassifications()
    getSelectedMeds()
    getPrescribedText()
    if(sessionStorage.getItem('pres-collapse')) {
      setCollapse(JSON.parse(sessionStorage.getItem('pres-collapse')))
    }
  },[])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  // Filter the list of classifications to ones belonging to the presrcibed section
  // Create a container for the classification
  const classificationsList = classifications.length && classifications.filter(classification => {
      if(classification.section === "prescribed") return true
      return false
    }).map(classification => 
      <Classification 
        key = {classification.id} 
        id = {classification.id} 
        classification ={classification.name}
        setSelectedMeds = {setSelectedMeds}
        selectedMeds = {selectedMeds}
        setSaved={setSaved}
        setSaveStatus={setSaveStatus}
      />
    )

  return (
      <React.Fragment>
        <div  className="box-container-numbered collapsable">
          <div onClick={handleCollapse}>
            <h4 className="numbered-subheading">
              {lang === "English" ? 
              "3. What prescribed medications are you using?" : 
              "3. Quels médicaments prescrits utilisez-vous?"}
              <span className="collapsed-icon">{collapse ? "-" : "+"}</span>
            </h4>
          </div>

          <Collapse isOpen={collapse}>
            <div className="padding-class">
              <p className="StepTwo-desc">
                These are medications you use to control your arthritis, but they might also
                help manage your pain. Select all that apply.
              </p>

              {classificationsList}

              <ThemeProvider theme={theme}>
                <TextField
                    onChange={handleTextChange}
                    className="text-field"
                    label="Others"
                    placeholder="Other prescribed medications you are using..."
                    variant="outlined"
                    fullWidth
                    multiline
                    value={prescribedText}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    rows="6"
                    id="prescribed-meds"
                />
              </ThemeProvider>
            </div>
          </Collapse>
        </div>
      </React.Fragment>
  )
}

export default QstepThree;
