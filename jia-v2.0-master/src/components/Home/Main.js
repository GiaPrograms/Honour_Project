import React from 'react';
import MainOption from './MainOption';
import mainOptions from '../../data/main-options.json'

import { NavLink as RRNav } from "react-router-dom";
import { Button } from "reactstrap";
import {Row} from "reactstrap";

//Get value of language from local storage
let lang = localStorage.getItem("language")

const Main = () => {
  return (
    <>
       
       <div className="newnext-btn-container">
        <div className="newnext-btn-content">
          <Button className="next-btn" tag={RRNav} to="/intro">
            {lang === "English" ? "Click to see what JIA offers" : "Cliquez pour voir ce que propose JIA"}
          </Button>
        </div>
      </div>

      {/* <div className="orangenext-btn-container">
        <div className="orangenext-btn-content">
          <Button className="next-btn" tag={RRNav} to="/intro">
            Next
          </Button>
        </div>
      </div> */}


      <div className="body-container">
        <div className="main-options">
          <h2>{lang === "English" ? "Why use JIA OptionMap?" : "Pourquoi utiliser JIA OptionMap?"}</h2>
          <Row>
            {mainOptions.options &&
              mainOptions.options.map((option) => (
                <MainOption key={option.id} desc={option} keyId={option.id} />
              ))}
          </Row>
        </div>
      </div>
      <div className="next-btn-container">
        <div className="next-btn-content">
          <h5>
            {lang === "English" ? 
              "You can use this app as often as you want!" : 
              "Vous pouvez utiliser cette application aussi souvent que vous le souhaitez!"}
          </h5>
          <h5>
            {lang === "English" ? 
              "You can change your answers and it will give you new ways to manage your pain!" : 
              "N’hésitez pas à changer vos réponses pour découvrir de nouvelles façons de prendre en charge votre douleur!"}
          </h5>
          <Button className="next-btn" tag={RRNav} to="/intro">
            {lang === "English" ? "Next" : "Suivant(e)"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Main
