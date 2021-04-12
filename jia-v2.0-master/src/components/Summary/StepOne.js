import React, {useState, useEffect} from 'react'
import {getRequest} from "../../API/ApiHandler"
import Spinner from '../UI/Spinner'

const StepOne = () => {
  // Q1 pain level value
  const [painLevel, setPainLevel] = useState();
  // Q2 pain areas values
  const [painAreas, setPainAreas] = useState([]);
  // Q3 selected meds
  const [prescribedMeds, setPrescribedMeds] = useState([]);
  const [otherMeds, setOtherMeds] = useState([]);
  // Q4 other selected meds and treatments
  const [treatments, setTreatments] = useState([]);
  // Q5 how often do you use your treatments values
  const [howOftenMeds, setHowOftenMeds] = useState();
  const [howOftenTreats, setHowOftenTreats] = useState();
  // Q6 how well does your treatment
  const [controlArthritis, setControlArthritis] = useState();
  const [managePain, setManagePain] = useState();

  const [isLoading, setIsLoading] = useState(true)

  const getPainLevel = async () => {
    let data = await getRequest(`/painLevels/user`);
    if (data) {
      let {
        data: { level },
      } = data;
      setPainLevel(level);
    }
    setIsLoading(false);
  };

  const getPainAreas = async () => {
    const data = await getRequest(`/painAreas/user`);
    if (data) {
      for (let part in data.data) {
        if (data.data[part] === true) {
          setPainAreas((prev) => [...prev, { name: part }]);
        }
      }
    }
    setIsLoading(false);
  };

  const getSelectedMeds = async () => {
    const meds = await getRequest(`/userMedications/user`);
    if (meds) {
      const { data } = meds;
      const prescribed = data.filter(
        (med) => med.classification.section === "prescribed"
      );
      const other = data.filter(
        (med) => med.classification.section === "other"
      );
      setPrescribedMeds(prescribed);
      setOtherMeds(other);
    }
    setIsLoading(false);
  };

  const getSelectedTreatments = async () => {
    const treatments = await getRequest(`/userTreatments/user`);
    if (treatments) {
      let { data } = treatments;
      setTreatments(data);
    }
    setIsLoading(false);
  };

  const getHowOften = async () => {
    let data = await getRequest(`/frequently/user`);
    if (data) {
      if(data.frequently) {
        setHowOftenMeds(data.frequently.prescribed_meds);
        setHowOftenTreats(data.frequently.other_treatments);
      }
    }
    setIsLoading(false);
  };

  const getHowWell = async () => {
    const data = await getRequest(`/effectiveness/user`);
    if (data) {
      const {
        data: { control_arthritis, manage_pain },
      } = data;
      setControlArthritis(control_arthritis);
      setManagePain(manage_pain);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getPainLevel();
    getPainAreas();
    getSelectedMeds();
    getSelectedTreatments();
    getHowOften();
    getHowWell();
  }, []);

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  // Message to display if no input was provided
  const notProvidedEN = "No Input was provided";
  const notProvidedFR = "Aucune information n’a été fournie.";

  // Pain level
  const painLevelItem =
    painLevel != null ? (
      <p className="text-center">
        {painLevel} / 5
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${painLevel}.png`)}
          alt="How much pain on average"
        />
      </p>
    ) : (
      <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
    );

  // Pain Areas
  const painAreasItem = painAreas.length ? (
    painAreas.map((area, i) => (
      <span key={i}>{(i ? ", " : "") + area.name}</span>
    ))
  ) : (
    <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
  );

  // Prescribed meds
  const presMedsItem = prescribedMeds.length ? (
    prescribedMeds.map((med, i) => (
      <span key={med.id}>{(i ? ", " : "") + med.name}</span>
    ))
  ) : (
    <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
  );

  // Other treatments
  const otherTreatmentsItem = [...otherMeds, ...treatments].length ? (
    [...otherMeds, ...treatments].map((treat, i) => (
      <span key={treat.id}>{(i ? ", " : "") + treat.name}</span>
    ))
  ) : (
    <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
  );

  // How often do you use prescribed arthritis medications
  const howOftenMedsItem =
    howOftenMeds != null ? (
      <p>{howOftenMeds}</p>
    ) : (
      <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
    );

  // How often do you use other pain treatments
  const howOftenTreatsItem =
    howOftenTreats != null ? (
      <p>{howOftenTreats}</p>
    ) : (
      <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
    );

  // How well do does your treatments control your arthritis
  const controlItem =
    controlArthritis != null ? (
      <p className="text-center">
        {controlArthritis} / 5
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${controlArthritis}.png`)}
          alt="How much pain on average"
        />
      </p>
    ) : (
      <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
    );

  // How well do does your treatments manage your pain
  const manageItem =
    managePain != null ? (
      <p className="text-center">
        {managePain} / 5
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${managePain}.png`)}
          alt="How much pain on average"
        />
      </p>
    ) : (
      <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
    );

  return (
    <div className="box-container-numbered summary-container">
      <h4 className="title_summary numbered-subheading">
        {lang === "English" ? "Step 1: Your pain and your treatments" : "Étape 1: Votre douleur et vos traitements"}
      </h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="padding-class">
          <h5> 
            {lang === "English" ? 
              "1. In the past 7 days, how much pain on average have you had because of your arthritis?" : 
              "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}
          </h5>
          <div className="summary-slider-container">{painLevelItem}</div>

          <h5> {lang === "English" ? "2. Where is your pain?" : "2. Où avez-vous mal?"} </h5>
          {painAreasItem}
          <h5> {lang === "English" ? "3. What prescribed medications are you using?" : "3. Quels médicaments prescrits prenez-vous?"} </h5>
          {presMedsItem}

          <h5>
            {lang === "English" ? 
              "4. What other treatments are you using for your arthritis pain?" : 
              "4. Quels autres traitements suivez-vous pour vos douleurs arthritiques?"}
          </h5>
          {otherTreatmentsItem}

          <h5>
            {lang === "English" ? 
              "5. How often do you use your treatments?" : 
              "5. À quelle fréquence utilisez-vous ces traitements?"}
          </h5>
          <h6>
            {lang === "English" ? 
              "Prescribed arthritis medications?" : 
              "Médicaments sous ordonnance contre l’arthrite?"}
          </h6>
          {howOftenMedsItem}
          <h6>{lang === "English" ? "Other pain treatments" : "Autres traitements pour la douleur"}</h6>
          {howOftenTreatsItem}
          <h5>
            {lang === "English" ? 
            "6. How well do does your treatments...control your arthritis?...manage your pain?" : 
            "6. Dans quelle mesure votre traitement...contrôle efficacement votre arthrite?...soulage votre douleur?"}
          </h5>
          <div className="summary-slider-container">
            {controlItem}
            {manageItem}
          </div>
        </div>
      )}
    </div>
  );
};

export default StepOne