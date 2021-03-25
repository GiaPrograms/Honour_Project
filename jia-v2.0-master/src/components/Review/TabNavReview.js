import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
export default class TabNavReview extends Component{

render(){

    //Get value of language from local storage
    let lang = localStorage.getItem("language")

    return(
        <div className="reviewDiv-nav">
            {this.props.current.match.url === "/review-and-select/recommendations" &&
            <React.Fragment>
            <NavLink to="/review-and-select/recommendations" className="review-active"><h4>{lang === "English" ? "My Results" : "Mes résultats"}</h4></NavLink>
            <NavLink to="/review-and-select/allTreatments"><h4>{lang === "English" ? "All Treatments" : "Tous les traitements"}</h4></NavLink>
            <NavLink to="/review-and-select/favorites"><h4>{lang === "English" ? "My Favourites" : "Mes préférés"}</h4></NavLink>
            </React.Fragment>
            }
            {this.props.current.match.url === "/review-and-select/allTreatments" &&
            <React.Fragment>
                <NavLink to="/review-and-select/recommendations"><h4>{lang === "English" ? "My Results" : "Mes résultats"}</h4></NavLink>
                <NavLink to="/review-and-select/allTreatments" className="review-active"><h4>{lang === "English" ? "All Treatments" : "Tous les traitements"}</h4></NavLink>
                <NavLink to="/review-and-select/favorites"><h4>{lang === "English" ? "My Favourites" : "Mes préférés"}</h4></NavLink>
            </React.Fragment>
            }
            {this.props.current.match.url === "/review-and-select/favorites" &&
            <React.Fragment>
            <NavLink to="/review-and-select/recommendations"><h4>{lang === "English" ? "My Results" : "Mes résultats"}</h4></NavLink>
            <NavLink to="/review-and-select/allTreatments"><h4>{lang === "English" ? "All Treatments" : "Tous les traitements"}</h4></NavLink>
            <NavLink to="/review-and-select/favorites" className="review-active"><h4>{lang === "English" ? "My Favourites" : "Mes préférés"}</h4></NavLink>
            </React.Fragment>
            }
        </div>
    )}
}

