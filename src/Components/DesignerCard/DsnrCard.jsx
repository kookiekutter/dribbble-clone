import React from "react";
import "./DsnrCard.css";
import { details } from "./DsnrCardDet";

const DsnrCard = ({ idx }) => {
  return (
    <div id="cardhover" key={idx}>
      <div
        className="card"
        style={{ backgroundImage: "url(" + details[idx].backgroundImage + ")" , backgroundSize:"cover"}}
      >
        <div className="cardtext">
          <div>
            <p id="cardname"> {details[idx].name}</p>
            <p id="cardjob"> {details[idx].job}</p>
          </div>
        </div>
        <ul>
          {details[idx].skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DsnrCard;
