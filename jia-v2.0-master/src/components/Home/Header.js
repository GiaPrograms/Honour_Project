import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css"
import TranslateButton from "../../components/UI/TranslateButton";
import logo from '../../img/logo.png';

//Get value of language from local storage
let lang = localStorage.getItem("language")

export default class Header extends Component{
  handleClick(ev, link){
    ev.preventDefault()
    this.props.handleNav(link)
    this.props.setNavTo(link)
  }

  render(){
    return(
      <div>
        {this.props.current.match.path === "/home" &&
          <div className='home-header'>
            <div className="home-logo-header">
              <NavLink to="/home"><img className="logo-home" alt="logo" src={logo}/></NavLink>
            </div>
            <div className='sub-header'>
              <div className="home-subheader-content">
                <h3>{lang === "English" ? "Managing Pain in Juvenile Idiopathic Arthritis" : "Prendre en charge la douleur associée à l’arthrite juvénile idiopathique"}</h3>
              </div>
            </div>
          </div>
        }
        <div className="header">
        {this.props.current.match.path !== "/home" &&
        <div>
          <ul className="tab-nav-header">
            <div className="tab-steps">
              <NavLink className="tab-nav-header-item" to="/home">
                <img className="logo-link" alt="logo" src={logo}/>
              </NavLink>
              <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='/questionnaire' onClick={(ev)=>this.handleClick(ev, "/questionnaire")}>
                <p>{lang === "English" ? "Pain & treatments" : "Douleur et traitements"}</p>
                <div className="tab-navlink-div">
                  <h2>1</h2>
                </div>
              </NavLink>
              <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='whats-important-to-you' onClick={(ev)=>this.handleClick(ev, "/whats-important-to-you")}>
                <p>{lang === "English" ? "What's important" : "Qu’est-ce qui est important pour vous"}</p>
                <div className="tab-navlink-div">
                  <h2>2</h2>
                </div>
              </NavLink>
              <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='/review-and-select/recommendations' onClick={(ev)=>this.handleClick(ev, "/review-and-select/recommendations")}>
                <p>{lang === "English" ? "Review & select" : "Révision et sélection"}</p>
                <div className="tab-navlink-div">
                  <h2>3</h2>
                </div>
              </NavLink>
              <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='/make-your-plan' onClick={(ev)=>this.handleClick(ev, "/make-your-plan")}>
                <p>{lang === "English" ? "Plan" : "Programme"}</p>
                <div className="tab-navlink-div">
                  <h2>4</h2>
                </div>
              </NavLink>
              <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='/summary' onClick={(ev)=>this.handleClick(ev, "/summary")}>
                <p>{lang === "English" ? "Summary" : "Résumé"}</p>
                <div className="tab-navlink-div">
                  <h2>5</h2>
                </div>
              </NavLink>

              <div>
                <div className="tab-nav-header-translation"> <TranslateButton/> </div>
              </div>
              
            </div>
          </ul>
        </div>
        }
        </div>
      </div>
    )
  }
}
