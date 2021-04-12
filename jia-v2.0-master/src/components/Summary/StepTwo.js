import React, {useState, useEffect} from 'react'
import {getRequest} from "../../API/ApiHandler"
import Spinner from '../UI/Spinner'

const StepTwo = () => {
  const [whatsImportant, setWhatsImportant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserPrefs = async () => {
    let data = await getRequest(`/userPreferences/user`);
    if (data) {
      const prefs = data.map((item) => {
        return {
          id: item.user_preference.preferenceId,
          description: item.description,
          value: item.user_preference.value,
        };
      });
      setWhatsImportant(prefs);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getUserPrefs();
  }, []);

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  // Message to display if no input was provided
  const notProvidedEN = "No Input was provided";
  const notProvidedFR = "Aucune information n’a été fournie.";

  const sliders = whatsImportant.length ? (
   whatsImportant.map((slider, i) => (
    <div key={slider.id}>
      <h5>
        <strong>{i + 1}. </strong>
        {slider.description}
      </h5>
      <p className="text-center">
        {slider.value} / 5
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${slider.value}.png`)}
          alt="manage your pain"
        />
      </p>
    </div>
   ))
  ) : (
    <p className="notFilled">{lang === "English" ? notProvidedEN : notProvidedFR}</p>
  )

  return (
    <div className="box-container-numbered">
      <h4 className="title_summary numbered-subheading">
        {lang === "English" ? "Step 2: What’s important to you" : "Étape 2: ce qui est important pour vous"}
      </h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="padding-class">
          <div className="summary-slider-container">{sliders}</div>
        </div>
      )}
    </div>
  );
};

export default StepTwo