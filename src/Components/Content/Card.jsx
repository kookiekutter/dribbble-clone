import React from "react";
import "./Card.css";
import { Carddet } from "./Carddet";

const Card = ({ idx }) => {
  return (
    <div id="concardhover">
      <div className="content">
        <div className="contentcard">
          <img
            src={Carddet[idx].Image}
            alt=""
            id="con-image"
            width={335}
            height={210}
            style={{ objectFit: "cover" }}
          />
          <div className="info">
            <div className="name-pro">
              <p id="cardname"> {Carddet[idx].name}</p>
              <p id="cardpro"> Pro</p>
            </div>

            <div className="social">
              <div className="like">
                <img src="/heart.svg" alt="" width={20} />
                <p> {Carddet[idx].likes}</p>
              </div>
              <div className="view">
                <img src="/eye.svg" alt="" srcset="" />
                <p> {Carddet[idx].views}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
