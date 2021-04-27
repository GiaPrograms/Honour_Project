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

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  // Message to display if no input was provided
  const notProvidedEN = "No Input was provided";
  const notProvidedFR = "Aucune information n’a été fournie.";

  const motivationItem = motivation ? (
    <React.Fragment>
      <p className="text-center">
        {motivation.level} / 5
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${motivation.level}.png`)}
          alt="motivated to follow plan"
        />
      </p>
    </React.Fragment>
  ) : (
    <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
  );

  const confidenceItem = confidence ? (
    <React.Fragment>
      <p className="text-center">
        {confidence.level} / 5
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${confidence.level}.png`)}
          alt="motivated to follow plan"
        />
      </p>
    </React.Fragment>
  ) : (
    <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
  );

  const factorsItem = factors.length ? (
    factors.map((factor) => (
      <div key={factor.id}>
        <strong>{lang === "English" ? factor.title : factor.fr_title}</strong>
        <p>{lang === "English" ? factor.description : factor.fr_description}</p>
      </div>
    ))
  ) : (
    <span className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</span>
  );

  const suggestionsItem = suggestions.length ? (
    suggestions.map((sug) => (
      <div key={sug.id}>
        <strong>{lang === "English" ? sug.title : sug.fr_title}</strong>
        <p>{lang === "English" ? sug.description : sug.fr_description}</p>
      </div>
    ))
  ) : (
    <span className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</span>
  );

  return (
    <div className="box-container-numbered">
      <h4 className="title_summary numbered-subheading">
        {lang === "English" ? "Step 4: Make your plan" : "Étape 04: Faites votre programme"}
      </h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="padding-class">
          <h5>
            {lang === "English" ? 
              "1. How motivated are you to follow your new plan?" : 
              "1. Dans quelle mesure êtes-vous motivé(e) à suivre votre nouveau programme?"}
          </h5>
          <div className="summary-slider-container">{motivationItem}</div>

          <h5>
            {lang === "English" ? 
              "2. How confident are you that you can follow your plan?" : 
              "2. Dans quelle mesure êtes-vous convaincu(e) de pouvoir suivre votre programme?"}
          </h5>
          <div className="summary-slider-container">{confidenceItem}</div>

          <h5>
            {lang === "English" ? 
              "3. Will any of these factors prevent you from following your new plan?" : 
              "3. Croyez-vous que l’un de ces facteurs vous empêchera de suivre votre nouveau programme?"}
          </h5>
          {factorsItem}

          <h5>
          {lang === "English" ? 
              "4. Suggestions to help you plan your next steps" : 
              "4. Suggestions qui pourraient vous aider à planifier les prochaines étapes"}
          </h5>
          {suggestionsItem}
        </div>
      )}
    </div>
  );
};

export default StepFour;
