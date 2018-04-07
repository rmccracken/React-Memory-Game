import React from "react";
import "./TeamCard.css";

const TeamCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
    </span>
  </div>
);

export default TeamCard;
