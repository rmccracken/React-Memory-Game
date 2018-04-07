import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <div class="navbar">
      <ul className="nav navbar">
          <li className="navbar-brand">MLB Memory Game</li>

          <li> Score: <span>{props.currentScore}</span> | Top Score: {props.topScore}</li>
      </ul>
  </div>
);


export default NavBar;
