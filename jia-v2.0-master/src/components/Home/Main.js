import React from 'react';
import MainOption from './MainOption';
import mainOptions from '../../data/main-options.json'

import { NavLink as RRNav } from "react-router-dom";
import { Button } from "reactstrap";
import {Row} from "reactstrap";

const Main = () => {
  return (
    <>
      <div className="body-container">
        <div className="main-options">
          <h2>Why use JIA OptionMap?</h2>
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
          <h5>You can use this app as often as you want!</h5>
          <h5>
            You can change your answers and it will give you new ways to manage
            your pain!
          </h5>
          <Button className="next-btn" tag={RRNav} to="/intro">
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Main
