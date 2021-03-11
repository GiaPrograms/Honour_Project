import React, {useState, useEffect} from 'react'
import Happyface from '../UI/Happyface';
import Star from '../UI/Star';

import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {withStyles} from '@material-ui/core/styles';
import {getRequest} from "../../API/ApiHandler"

const StudyDetails = ({study}) => {
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [mapHappyFace] = useState([...Array(100).keys()])
  
  const stars = [1, 2, 3, 4, 5]

  const getResults = async () => {
    let data = await getRequest(`/results/${study.id}`)
    if(data) setResults(data)
  }

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.text.secondary,
      color: 'rgba(255, 255, 255, 1)',
      boxShadow: theme.shadows[3],
      fontSize: 20,
    },
  }))(Tooltip);

  useEffect(() => {
    getResults()
  },[])

  const toggle = () => setOpen(!open);

  return (
    <div className="study-container">
      {study &&
      <React.Fragment>

        <div className="icon-container">
          <InfoIcon className="material-icons info-icon" onClick={toggle}>
            info
          </InfoIcon>
          <Modal isOpen={open} toggle={toggle}>
            <ModalHeader toggle={toggle}>Study Details</ModalHeader>
            <ModalBody>
              <h3>Methods</h3>
              <p>{study.methods}</p>
              <h3>Treatments</h3>
              <p>{study.treatments}</p>
              <h3>Results</h3>
              <p>{study.treatment_results}</p>
              <h3>Reference</h3>
              <p>{study.reference}</p>
              <h3>PubMed Link</h3>
              <a href={study.pubMed} target="_blank" rel="noopener noreferrer">{study.pubMed}</a>
            </ModalBody>
            <ModalFooter>
              <Button className="next-btn" onClick={toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>

        <h3 id="experts_suggest">Does it work?</h3>
        <p>{study.does_work}</p>
        <div className="study_happyFace_container">
          {results && results.map((result, i) => (
              <div key={i} className="study_happyFace_div">
                <h3>{result.name}</h3>
                <div className="study_happyFace_image_container">
                  {mapHappyFace.map((happyFace, i) => (
                      <Happyface key={i} happyFaceColor={i <= (result.score - 1) ? 'yellow' : 'none'}
                                  score={result.score}/>
                  ))
                  }
                </div>
                <div className="happyFace-score-container">
                  <p><strong>{result.statistics}</strong>
                  </p>
                </div>
              </div>
          ))
          }
        </div>
        <h3 id="experts_suggest">Is it safe?</h3>
        <p>{study.is_safe}</p>
        <div className="startContainer-full">
          <div className="startContainer-half">
            <h3 id="experts_suggest">Should I believe this research?</h3>
            <p>{study.believe_research}</p>
            <div className="starContainer">
              {stars.map((number, i) => (
                <Star 
                  key={i}
                  starShape={i <= study.rating - 1 ? 'filled' : 'empty'}
                  starColor={i <= study.rating - 1 ? '#FFCE07' : 'none'}
                  starStroke={i <= study.rating - 1 ? '5px' : '5px'}
                />
              ))}
            </div>
          </div>
          {results.statistics &&
          <div className="starMessage-Container">{results.statistics}</div>
          }
        </div>

        <div className="icon-container">
          
          <LightTooltip title="Click for More Info" placement="right" arrow>
            <InfoIcon className="material-icons info-icon" onClick={toggle}>
              info
            </InfoIcon>
          </LightTooltip>
          
          <Modal isOpen={open} toggle={toggle}>
            <ModalHeader toggle={toggle}>Study Details</ModalHeader>
            <ModalBody>
              <h3>Methods</h3>
              <p>{study.methods}</p>
              <h3>Treatments</h3>
              <p>{study.treatments}</p>
              <h3>results</h3>
              <p>{study.treatment_results}</p>
              <h3>reference</h3>
              <p>{study.reference}</p>
              <h3>PubMed link</h3>
              <a href={study.pubMed} target="_blank" rel="noopener noreferrer">{study.pubMed}</a>
            </ModalBody>
            <ModalFooter>
              <Button className="next-btn" onClick={toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
        
      </React.Fragment>
      }
    </div>
  )
}

export default StudyDetails 