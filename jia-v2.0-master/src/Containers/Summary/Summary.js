import React, {useState, useEffect} from 'react'
import Header from '../../components/Home/Header'
import {Button} from "reactstrap";
import jsPDF from "jspdf";
import domtoimage from 'dom-to-image';

import StepOne from '../../components/Summary/StepOne';
import StepTwo from '../../components/Summary/StepTwo';
import StepThree from '../../components/Summary/StepThree';
import StepFour from '../../components/Summary/StepFour';

import Footer from '../../components/Footer';
import SummaryPdf from '../../components/Summary/SummaryPdf';
import Subheader from '../../components/UI/Subheader/Subheader';

const Summary = props => {
  const [navTo, setNavTo] = useState('')

  const printSummary = () => {
    let nodes = document.querySelectorAll(".pdf-page");
    const pdf = new jsPDF();
    nodes.forEach((page, id) => {
      setTimeout(() => {
        domtoimage.toPng(page)
          .then(async function (dataUrl) {
            const img = new Image();
            img.src = dataUrl;

            if (id < nodes.length - 1) {
              pdf.addImage(img, 'PNG', 0, 0);
              pdf.addPage();
            } else {
              pdf.addImage(img, 'PNG', 0, 0);
              //SummaryContent.complete(pdf);
              let date = new Date().toLocaleString();
              pdf.save(`Summary_${date}`);
            }
          });
      },100);
    });
  }

  const handleStepperNav = to => {
    props.history.push(to)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return(
    <React.Fragment>
      <div className="summary-container">
        <div className='page-header'>
          <Header current={props} handleNav={handleStepperNav} setNavTo={setNavTo}/>
        </div>
        <div className="wrapper">
          <Subheader title="Summary"/>
          <div className="body-container">
            <div className="notice summary-notice">
              <div>
                <h4>You're Done!</h4>
                <p>Below is a summary of your information. You can save a copy to your device and share it with your
                  health care team.</p>
              </div>
              <div>
                <Button id="savetoDev" className="next-btn" onClick={printSummary}>Download</Button>
              </div>
            </div>
            <StepOne/>
            <StepTwo />
            <StepThree hidden={false}/>
            <StepFour />
          </div>
          <div className="save-container">
            <div className="save-content">
              <Button id="savetoDev" className="next-btn" onClick={printSummary}>Download</Button>
            </div>
          </div>
        </div>
        <SummaryPdf />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Summary