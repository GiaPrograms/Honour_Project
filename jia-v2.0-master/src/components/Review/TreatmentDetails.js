/**
 * @file
 * Component for displaying the treatment details when it is viewed 
 * @author <akel.ms93@gmail.com>
 */

import React, {useState, useEffect} from 'react'
import Study from './Study'
import TrafficLight from '../UI/TrafficLight';
import Header from '../Home/Header';
import FavouriteIcon from '../UI/Icons/FavouriteIcon'
import {Button} from "reactstrap";
import Footer from "../Footer";
import {baseUrl, getRequest, postRequest, deleteRequest} from "../../API/ApiHandler"

import placeholder from "../../img/default_placeholder.png"

const TreatmentDetails = (props) => {
  const [treatment, setTreatment] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [studies, setStudies] = useState([])
  const [webLinks, setWebLinks] = useState([])
  const [videoLinks, setVideoLinks] = useState([])
  const [navTo, setNavTo] = useState('')

  const  toggleFavourite = ev => {
    const path = "/userFavourites"
    const input = {treatment_id: treatment.id}
    if (ev.target.getAttribute('data-active') === 'false') {
      postRequest(path, input)
      setIsSelected(true)
    } else {
      deleteRequest(path, input)
      setIsSelected(false)
    }
  }

  const getWebLinks = async () => {
    let data = await getRequest(`/learn/${treatment.id}`)
    if(data.length) setWebLinks(data)
  }

  const getVideoLinks = async () => {
    let data = await getRequest(`/videos/${treatment.id}`)
    if(data.length) setVideoLinks(data)
  }

  const getStudies = async () => {
    let data = await getRequest(`/studies/${treatment.id}`)
    if(data.length) setStudies(data)
  }

  const handleStepperNav = to => {
    props.data.history.push(to)
  }

  useEffect(() => {
    setTreatment(props.data.location.state[0])
    setIsSelected(props.data.location.state[1])
  },[])

  useEffect(() => {
    if(treatment) {
      getWebLinks()
      getVideoLinks()
      getStudies()
    }
  },[treatment])

  //Get value of language from local storage
  let lang = localStorage.getItem("language")

  const makePage = () => {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className='page-header'>
            <Header current={props.data} handleNav={handleStepperNav} setNavTo={setNavTo}/>
          </div>
          <div className='sub-header'>
            <div className="subheader-content">
              <h3>{lang === "English" ? "Treatment details" : "Détails du traitement"}</h3>
            </div>
          </div>
          <div className="body-container treatment_details">
            <div className="back-button-container">
              <Button className="next-btn" onClick={() => {props.data.history.goBack()}}>{lang === "English" ? "Go Back" : "Retourner"}</Button>
            </div>
            <div className="box-container">
              {/* Image and description */}
              <div id="image_and_description">
                <img alt={treatment.name} src={treatment.image ? `${baseUrl}/${treatment.image}` : placeholder}/>
                <div className="description">
                  <div className="description-title">
                    <h2>{treatment.name}</h2>
                    <span>
                        <FavouriteIcon 
                          toggleFav={toggleFavourite}
                          isFav={isSelected}
                        />
                    </span>
                  </div>
                  <p>{treatment.description}</p>
                </div>
              </div>
              {/* traffic level and description */}
              <div id="traffic_and_description">
                <div className="traffic-light-container">
                  <TrafficLight level={treatment.traffic_level}/>
                </div>
                <div className="traffic-description">
                  <p>{treatment.traffic_description}</p>
                </div>
              </div>

              <div className="treatment_details_overview">
                <h3 id="experts_suggest">What do experts suggest?</h3>
                <p>{treatment.experts_suggest}</p>
              </div>
              {/* Studies section */}
              <div> 
                <h3>What does the research say?</h3>
              </div>
              {studies &&
                <div className="treatment_details_study_container">
                  {studies.map((study, i) => (
                    <Study 
                        key={study.id} 
                        study={study} 
                        studyNo={i+1}
                      />
                    )
                  )}
                </div>
              }
              {/* treatment details section */}
              <div className="treatment-details-texts">
                <h3>How can I use this treatment?</h3>
                <p>{treatment.how_use}</p>
                <h3>How soon will I feel better?</h3>
                <p>{treatment.how_soon}</p>
                <h3>How much does this treatment cost?</h3>
                <p>{treatment.cost}</p>
                <h3>Where can I get this treatment?</h3>
                <p>{treatment.where}</p>
                <h3>What else should I consider?</h3>
                <p>{treatment.consider}</p>

                {webLinks.length > 0 &&
                <h3>Learn more:</h3>}
                <div className="treatment_details_links">
                  {webLinks.map((web, i) =>
                    <p key={i}><a href={`${web.link}`} target="_blank" rel="noopener noreferrer">{web.name ? `${web.name}` : `${web.link}`}</a></p>
                  )}
                </div>

                {videoLinks.length > 0 &&
                <h3>Videos:</h3>}
                <div className="treatment_details_links">
                  {videoLinks.map((video, i) =>
                    <p key={i}><a href={`${video.link}`} target="_blank" rel="noopener noreferrer">{video.name ? `${video.name}`: `${video.link}`}</a></p>
                  )}
                </div>
              </div>

              <div className="save-as-favourite">
                <h5>
                  Save to favourites
                </h5>
                <span>
                  <FavouriteIcon 
                    toggleFav={toggleFavourite}
                    isFav={isSelected}
                  />
                </span>
              </div>
            </div>
            <div className="back-button-container">
              <Button className="next-btn" onClick={() => props.data.history.goBack()}>{lang === "English" ? "Go Back" : "Retourner"}</Button>
            </div>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }

  return (
    <div id="treatment_details_div">{treatment && makePage()}</div>
  )
}

export default TreatmentDetails