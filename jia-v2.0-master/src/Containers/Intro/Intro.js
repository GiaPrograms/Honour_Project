import React, {useState} from 'react';
import {NavLink as RRNav} from 'react-router-dom';
import {Button} from 'reactstrap';
import Footer from "../../components/Footer";
import Header from "../../components/Home/Header";

const Intro = props => {
  const [navTo, setNavTo] = useState('')

  const handleStepperNav = to => {
    props.history.push(to)
  }
  
  return(
      
      <div className="wrapper intro">
        <div className="newnext-btn-container">
            <Button className="next-btn" tag={RRNav} to="/questionnaire">Click and continue to Step 1</Button>
        </div>
        <div className='page-header'>
          <Header current={props} handleNav={handleStepperNav} setNavTo={setNavTo}/>
        </div>
        <div className="body-container">
          <picture className="steps-container">
            <source media="(max-width: 660px)" className="steps-img" srcSet={require(`../../img/stepsMobile.png`)} alt="five-steps"/>
            <img media="(min-width: 661px)" className="steps-img text-center" srcSet={require(`../../img/steps.png`)} alt="five-steps"/>
          </picture>

          <div className="disclaimer">
            <img src={require(`../..//img/warning.png`)} alt="warning icon"/>
            <div>
              <p>Keep taking your prescribed treatments so that your arthritis does not get worse.</p>
            </div>
          </div>
        </div>
        <div className="next-btn-container">
            <p>Okay, let's start with the first step!</p>
            <Button className="next-btn" tag={RRNav} to="/questionnaire">Continue to Step 1</Button>
        </div>
        <Footer/>
      </div>
  )
    
}

export default Intro 