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

  // Message to display if no input was provided
  const notProvided = "No Input was provided";

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
      <p className="notFilled">{notProvided}</p>
    );

  // Pain Areas
  const painAreasItem = painAreas.length ? (
    painAreas.map((area, i) => (
      <span key={i}>{(i ? ", " : "") + area.name}</span>
    ))
  ) : (
    <p className="notFilled">{notProvided}</p>
  );

  // Prescribed meds
  const presMedsItem = prescribedMeds.length ? (
    prescribedMeds.map((med, i) => (
      <span key={med.id}>{(i ? ", " : "") + med.name}</span>
    ))
  ) : (
    <p className="notFilled">{notProvided}</p>
  );

  // Other treatments
  const otherTreatmentsItem = [...otherMeds, ...treatments].length ? (
    [...otherMeds, ...treatments].map((treat, i) => (
      <span key={treat.id}>{(i ? ", " : "") + treat.name}</span>
    ))
  ) : (
    <p className="notFilled">{notProvided}</p>
  );

  // How often do you use prescribed arthritis medications
  const howOftenMedsItem =
    howOftenMeds != null ? (
      <p>{howOftenMeds}</p>
    ) : (
      <p className="notFilled">{notProvided}</p>
    );

  // How often do you use other pain treatments
  const howOftenTreatsItem =
    howOftenTreats != null ? (
      <p>{howOftenTreats}</p>
    ) : (
      <p className="notFilled">{notProvided}</p>
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
      <p className="notFilled">{notProvided}</p>
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
      <p className="notFilled">{notProvided}</p>
    );

  return (
    <div className="box-container-numbered summary-container">
      <h4 className="title_summary numbered-subheading">
        Step 1: Your pain and your treatments
      </h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="padding-class">
          <h5> 
            1. In the past 7 days, how much pain on average have you had because
            of your arthritis?
          </h5>
          <div className="summary-slider-container">{painLevelItem}</div>

          <h5>2. Where is your pain? </h5>
          {painAreasItem}
          <h5>3. What prescribed medications are you using?</h5>
          {presMedsItem}

          <h5>
            4. What other treatments are you using for your arthritis pain?
          </h5>
          {otherTreatmentsItem}

          <h5>5. How often do you use your treatments?</h5>
          <h6>Prescribed arthritis medications?</h6>
          {howOftenMedsItem}
          <h6>Other pain treatments?</h6>
          {howOftenTreatsItem}
          <h5>
            6. How well do does your treatments…control your arthritis?...manage
            your pain?
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