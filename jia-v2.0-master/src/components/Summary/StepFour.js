import React, { useState, useEffect } from "react";
import { getRequest } from "../../API/ApiHandler";
import Spinner from "../UI/Spinner";

const StepFour = () => {
  const [motivation, setMotivation] = useState();
  const [confidence, setConfidence] = useState();
  const [factors, setFactors] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserMotivation = async () => {
    let res = await getRequest(`/motivations/user`);
    if (res) {
      const { data } = res;
      setMotivation(data);
    }
    setIsLoading(false);
  };

  const getUserConfidence = async () => {
    let res = await getRequest(`/confidence/user`);
    if (res) {
      const { data } = res;
      setConfidence(data);
    }
    setIsLoading(false);
  };

  const getUserFactors = async () => {
    let data = await getRequest(`/userFactors/user`);
    if (data) setFactors(data);
    setIsLoading(false);
  };

  const getUserSuggestions = async () => {
    let data = await getRequest(`/userSuggestions/user`);
    if (data) setSuggestions(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getUserMotivation();
    getUserConfidence();
    getUserFactors();
    getUserSuggestions();
  }, []);

  // Message to display if no input was provided
  const notProvided = "No Input was provided";

  const motivationItem = motivation ? (
    <React.Fragment>
      <p className="text-center">
        {motivation.level} / 10
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${motivation.level}.png`)}
          alt="motivated to follow plan"
        />
      </p>
    </React.Fragment>
  ) : (
    <p className="notFilled">{notProvided}</p>
  );

  const confidenceItem = confidence ? (
    <React.Fragment>
      <p className="text-center">
        {confidence.level} / 10
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${confidence.level}.png`)}
          alt="motivated to follow plan"
        />
      </p>
    </React.Fragment>
  ) : (
    <p className="notFilled">{notProvided}</p>
  );

  const factorsItem = factors.length ? (
    factors.map((factor) => (
      <div key={factor.id}>
        <strong> {factor.title}</strong>
        <p>{factor.description}</p>
      </div>
    ))
  ) : (
    <span className="notFilled">{notProvided}</span>
  );

  const suggestionsItem = suggestions.length ? (
    suggestions.map((sug) => (
      <div key={sug.id}>
        <strong>{sug.title}</strong>
        <p>{sug.description}</p>
      </div>
    ))
  ) : (
    <span className="notFilled">{notProvided}</span>
  );

  return (
    <div className="box-container-numbered">
      <h4 className="title_summary numbered-subheading">
        Step 4: Make your plan
      </h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="padding-class">
          <h5>1. How motivated are you to follow your new plan?</h5>
          <div className="summary-slider-container">{motivationItem}</div>

          <h5>2. How confident are you that you can follow your plan?</h5>
          <div className="summary-slider-container">{confidenceItem}</div>

          <h5>
            3. Will any of these factors prevent you from following your new
            plan?
          </h5>
          {factorsItem}

          <h5>4. Suggestions to help you plan your next steps</h5>
          {suggestionsItem}
        </div>
      )}
    </div>
  );
};

export default StepFour;
