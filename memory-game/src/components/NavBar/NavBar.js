import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <div>
      <ul className="nav navbar">
          <li class="navbar-brand">Baseball Classic</li>
          <li
              className={props.message}>
               {props.message}
          </li>
          <li> Score: <span>{props.curScore}</span> | Top Score: {props.topScore}</li>
      </ul>
  </div>
);


export default NavBar;
