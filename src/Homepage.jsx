import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import DsnrCard from "./Components/DesignerCard/DsnrCard";
import Card from "./Components/Content/Card";
import Endpage from "./Components/endpage/Endpage";
import { Carddet } from "./Components/Content/Carddet";
import { details } from "./Components/DesignerCard/DsnrCardDet";
import "./Homepage.css";
import { Link } from "react-router-dom";


const Homepage = () => {
  // const [liked,setliked]=
  return (
    <div className="App">
      <Header />
      {/* <Follow/> */}
      
      <Hero />
      {/* <Login/> */}
      {/* <Signup/> */}

      <div className="des-scroll">
        <div className="carousel">
          {details.map((d, l) => (
            <DsnrCard idx={l} />
          ))}
        </div>
      </div>
      <p id="con-text">Explore inspiring Designs</p>

      <div className="contentcards">
        {Carddet.map((i, k) => {
          return (
            <Link to={`/card/${k}`}>
              <Card idx={k} />
            </Link>
          );
        })}
      </div>

      <Endpage />
    </div>
  );
};

export default Homepage;
