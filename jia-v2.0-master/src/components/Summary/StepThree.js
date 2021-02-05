import React, { useState, useEffect } from "react";
import PrintTreatments from "./PrintTreatments";
import { getRequest } from "../../API/ApiHandler";
import Spinner from "../UI/Spinner";

const StepThree = ({ hidden }) => {
  const [sc, setSc] = useState([]);
  const [hcp, setHcp] = useState([]);
  const [favs, setFavs] = useState([]);
  const [plans, setPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserSc = async () => {
    let data = await getRequest(`/userScs/user`);
    if (data) setSc(data);
    setIsLoading(false);
  };

  const getUserHcp = async () => {
    let data = await getRequest(`/userHcps/user`);
    if (data) setHcp(data);
    setIsLoading(false);
  };

  const getUserFavs = async () => {
    let data = await getRequest(`/userFavourites/user`);
    if (data) setFavs(data);
    setIsLoading(false);
  };

  const getUserPlans = async () => {
    let data = await getRequest(`/userPlans/user`);
    if (data) setPlan(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getUserSc();
    getUserHcp();
    getUserFavs();
    getUserPlans();
  }, []);

  const topThreeSC = sc && sc.map((sc) => <li key={sc.id}>{sc.name}</li>);

  const topThreeHCP = hcp && hcp.map((hcp) => <li key={hcp.id}>{hcp.name}</li>);

  const favoritesList = favs.length ? (
      favs.map((fav) => <li key={fav.id}>{fav.name}</li>)
    ) : (
      <p className="text-left">Your favorites list is empty</p>
    );

  const planList = plans.length ? (
      plans.map((plan) => <li key={plan.id}>{plan.name}</li>)
    ) : (
      <p className="text-left">Your plan list is empty</p>
    );

  return (
    <div className="box-container-numbered">
      <h4 className="title_summary numbered-subheading">
        Step 3: Review and select treatment options
      </h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="padding-class">
          <h5>
            <strong>1. </strong>
            Treatments you could try now:
            {!hidden && <PrintTreatments type={"sc"} passSC={sc} />}
          </h5>
          {topThreeSC}

          <h5>
            <strong>2. </strong>
            Treatments you could discuss with your health care team before
            trying:
            {!hidden && <PrintTreatments type={"hcp"} passHCP={hcp} />}
          </h5>
          {topThreeHCP}

          <h5>
            <strong>3. </strong>
            Treatments in your Favourites list:
            {!hidden && <PrintTreatments type={"favs"} passFavs={favs} />}
          </h5>
          {favoritesList}

          <h5>
            <strong>4. </strong>
            Your treatment plan:
            {!hidden && <PrintTreatments type={"plan"} passPlan={plans} />}
          </h5>
          {planList}
        </div>
      )}
    </div>
  );
};

export default StepThree;
