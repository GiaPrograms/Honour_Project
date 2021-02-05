import React, {useState} from 'react'
import {Collapse} from 'reactstrap';
import StudyDetails from './StudyDetails';

const Study = ({study, studyNo}) => {
  const [collapse, setCollapse] = useState(false)
  
  return (
    <React.Fragment>
      {study.name
      ? <div id={`study_${studyNo}`} className="box-container-numbered">
          <div id={`study_${studyNo}`} onClick={() => setCollapse(!collapse)}>
            <h4 className="numbered-subheading">Study {studyNo}: {study.name}
              <span className="collapsed-icon">{collapse ? "-" : "+"}</span>
            </h4>
          </div>
          <Collapse isOpen={collapse} style={{marginBottom: '2rem'}}>
            <StudyDetails 
              study={study} 
              onClick={() => setCollapse(!collapse)}
            />
          </Collapse>
        </div>
      : <>
          <h3>Does it work?</h3>
          <p>{study.does_work}</p>
          <h3>Is it safe?</h3>
          <p>{study.is_safe}</p>
        </>
     
      }
    </React.Fragment>
  )
}

export default Study 