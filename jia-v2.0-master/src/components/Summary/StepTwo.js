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

  // Message to display if no input was provided
  const notProvided = "No Input was provided";

  // const sliders =
  //   whatsImportant &&
  //   whatsImportant.map((slider, i) => (
  //     <div key={slider.id}>
  //       <h5>
  //         <strong>{i + 1}. </strong>
  //         {slider.description}
  //       </h5>
  //       {slider.value !== null ? (
  //         <p className="text-center">
  //           {slider.value} / 10
  //           <img
  //             style={{ width: "60%" }}
  //             src={require(`../../img/${slider.value}.png`)}
  //             alt="manage your pain"
  //           />
  //         </p>
  //       ) : (
  //         <p className="notFilled">{notProvided}</p>
  //       )}
  //     </div>
  //   ));

  const sliders = whatsImportant.length ? (
   whatsImportant.map((slider, i) => (
    <div key={slider.id}>
      <h5>
        <strong>{i + 1}. </strong>
        {slider.description}
      </h5>
      <p className="text-center">
        {slider.value} / 10
        <img
          style={{ width: "60%" }}
          src={require(`../../img/${slider.value}.png`)}
          alt="manage your pain"
        />
      </p>
    </div>
   ))
  ) : (
    <p className="notFilled">{notProvided}</p>
  )

  return (
    <div className="box-container-numbered">
      <h4 className="title_summary numbered-subheading">
        Step 2: What’s important to you
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