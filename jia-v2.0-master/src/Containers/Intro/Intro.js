import React, {useState} from 'react';
import {NavLink as RRNav} from 'react-router-dom';
import {Button} from 'reactstrap';
import Footer from "../../components/Footer";
import Header from "../../components/Home/Header";
import warning from '../../img/warning.png';
import stepMobile from '../../img/stepsMobile.png';
import steps from '../../img/steps.png';
import fr_steps from '../../img/5Étapes.png';


const Intro = props => {
  const [navTo, setNavTo] = useState('')

  const handleStepperNav = to => {
    props.history.push(to)
  }

  //Get value of language from local storage
  let lang = localStorage.getItem("language")
  
  return(
      
      <div className="wrapper intro">
        <div className="newnext-btn-container">
            <Button className="next-btn" tag={RRNav} to="/questionnaire">{lang === "English" ? 
                "Click and continue to Step 1" : 
                "Cliquez et passez à l'étape 1"}
            </Button>
        </div>
        <div className='page-header'>
          <Header current={props} handleNav={handleStepperNav} setNavTo={setNavTo}/>
        </div>
        <div className="body-container">
          <picture className="steps-container">
            <source media="(max-width: 660px)" className="steps-img" srcSet={stepMobile} alt="five-steps"/>
            <img media="(min-width: 661px)" className="steps-img text-center" srcSet={lang === "English" ? steps : fr_steps} alt="five-steps"/>
          </picture>

          <div className="disclaimer">
            <img src={warning} alt="warning icon"/>
            <div>
              <p>
                {lang === "English" ? 
                "Keep taking your prescribed treatments so that your arthritis does not get worse." : 
                "Continuez à prendre vos traitements prescrits afin que votre arthrite ne s'aggrave pas."}
              </p>
            </div>
          </div>
        </div>
        <div className="next-btn-container">
            <p>
              {lang === "English" ? 
              "Okay, let's start with the first step!" : 
              "D'accord, commençons par la première étape!"}
            </p>
            <Button className="next-btn" tag={RRNav} to="/questionnaire">{lang === "English" ? "Continue to Step 1" : "Passez à l'étape 1"}</Button>
        </div>
        <Footer/>
      </div>
  )
    
}

export default Intro 