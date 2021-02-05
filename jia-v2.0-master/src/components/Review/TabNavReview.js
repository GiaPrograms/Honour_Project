import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
export default class TabNavReview extends Component{

render(){
    return(
        <div className="reviewDiv-nav">
            {this.props.current.match.url === "/review-and-select/recommendations" &&
            <React.Fragment>
            <NavLink to="/review-and-select/recommendations" className="review-active"><h4>My Results</h4></NavLink>
            <NavLink to="/review-and-select/allTreatments"><h4>All Treatments</h4></NavLink>
            <NavLink to="/review-and-select/favorites"><h4>My Favourites</h4></NavLink>
            </React.Fragment>
            }
            {this.props.current.match.url === "/review-and-select/allTreatments" &&
            <React.Fragment>
                <NavLink to="/review-and-select/recommendations"><h4>My Results</h4></NavLink>
                <NavLink to="/review-and-select/allTreatments" className="review-active"><h4>All Treatments</h4></NavLink>
                <NavLink to="/review-and-select/favorites"><h4>My Favourites</h4></NavLink>
            </React.Fragment>
            }
            {this.props.current.match.url === "/review-and-select/favorites" &&
            <React.Fragment>
            <NavLink to="/review-and-select/recommendations"><h4>My Results</h4></NavLink>
            <NavLink to="/review-and-select/allTreatments"><h4>All Treatments</h4></NavLink>
            <NavLink to="/review-and-select/favorites" className="review-active"><h4>My Favourites</h4></NavLink>
            </React.Fragment>
            }
        </div>
    )}
}

