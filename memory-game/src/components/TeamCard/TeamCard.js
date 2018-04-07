import React from "react";
import "./TeamCard.css";

const TeamCard = props => (
  <div className="card">
      <div className="img-container">
          <a onClick={() => props.teamSelected(props.name)} 
              className={props.curScore === 0 }
          >
              <img alt={props.name} src={props.image} />
          </a>
      </div>
  </div>
);

export default TeamCard;


