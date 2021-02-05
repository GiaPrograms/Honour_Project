import React, {useState, useEffect} from 'react'
import {Card, CardTitle, CardImg, CardBody, CardFooter, Col, CardText} from 'reactstrap';
import {Link} from "react-router-dom";
import FavouriteIcon from './UI/Icons/FavouriteIcon'
import PlanCheckbox from './UI/PlanCheckbox'
import {postRequest, deleteRequest, baseUrl} from '../API/ApiHandler';

import placeholder from "../img/default_placeholder.png"

const TreatmentCard = ({treatment, selected, setSelected, icon, setPlan, setSaved, setSaveStatus}) => {
  const [isSelected, setIsSelected] = useState(false)

  const  toggleFavourite = async(ev) => {
    const input = {treatment_id: treatment.id}
    if (ev.target.getAttribute('data-active') === 'false') {
      postRequest("/userFavourites", input)
      const addedFav = {id: treatment.id}
      setSelected(fav => [...fav, addedFav])
      setIsSelected(true)
    } else {
      setIsSelected(false)
      setSelected(selected.filter(fav => fav.id !== treatment.id))
      deleteRequest("/userFavourites", input)
      deleteRequest("/userPlans", input)
    }
  }

  const toggleCheckbox = isChecked => {
    if (isChecked) {
      const addedPlan = {id: treatment.id}
      setPlan(plan => [...plan, addedPlan])
      setIsSelected(true)
    } else {
      setIsSelected(false)
      setPlan(selected.filter(plan => plan.id !== treatment.id))
    }
    setSaved(false)
    setSaveStatus('default')
  }

  useEffect(() => {
    if(selected) setIsSelected(selected.some(selection => treatment.id === selection.id))
  },[selected])

  return (
    <Col xs="12" md="6" lg="4" key={treatment.id} className="all-treatments-col">
      <Card className="card-style text-left">
        <Link to={
            {
              pathname: `/treatment-details/${treatment.name}`,
              state: [treatment, isSelected]
            }
          }
        >
          <div className="card-img-container">
            <CardImg 
              className="cardImg" 
              top 
              width="100%" 
              alt={treatment.name} 
              src={ treatment.image ? `${baseUrl}/${treatment.image}` : placeholder}
            />
          </div>
        </Link>
        <CardBody>
          <CardTitle tag="h4">{treatment.name}</CardTitle>
          <div className="card-bottom">
          <CardText>
            {icon === "fav"
              ? <FavouriteIcon 
                  toggleFav={toggleFavourite}
                  isFav={isSelected}
                />
              : <PlanCheckbox 
                  toggleCheckbox={toggleCheckbox}
                  isChecked={isSelected}
                />
            }
          </CardText>
          </div>
        </CardBody>
        <CardFooter className="card-footer">
          <Link 
            className="card-link"
            to={
              {
                pathname: `/treatment-details/${treatment.name}`,
                state: [treatment, isSelected]
              }
            }>
            Read More
          </Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default TreatmentCard