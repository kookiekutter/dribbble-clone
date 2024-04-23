import React from "react";
import "./Follow.css";
import { Link } from "react-router-dom";
import Card from "./Components/Content/Card";

const Follow = () => {
  return (
    <div>
      <div className="follow">
        <div className="dsrone">
        <div className="dsrfirst">
          <img src="five.png" id="dsrimg" alt="" srcset="" width={300} />
          <div className="dsnrdetails">
            <div className="dsrnameflw">
            <p id="dsrname">Mercedes Bazan</p>
            <button id="following">Following</button>
            </div>
            <p id="dsrjob">Senior Designer</p>
            <ul>
              <li>Javascript</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Adobe XD</li>
              <li>Graphic Designing</li>
              <li>Photoshop</li>
              <li>Webflow</li>
              <li>Wix Studio</li>
              <li>Canva</li>
              <li>Sketch</li>
              <li>Adobe Dreamwaver</li>
              <li>Invision</li>
            </ul>
          </div>
        </div>
        <p id="abt">About the Designer</p>
        <p id="abtdet">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          provident omnis fugiat similique nostrum amet ducimus quae non
          architecto at quisquam error, nobis natus. Nam voluptatem aliquid
          molestiae accusantium odio. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laboriosam quasi quod dolor. Dolorum quisquam
          deleniti ut harum. Atque doloribus facilis aliquam, suscipit tempora
          culpa ducimus quo velit aspernatur ratione repudiandae. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Molestiae, asperiores
          corrupti optio at sint illum a in. Nesciunt ullam officia repellat,
          laborum, ipsum aliquam a neque dolorem cum soluta nisi!
        </p>
        <Link to='/'><button id="back">Go Back</button></Link>
        {/* <p id="abt">Recomondations</p> */}
        </div>
        <p id="rec">Recomonded for you</p>
      <div className="recc">
      <Card idx={9}/>
      <Card idx={10}/>
      <Card idx={5}/>
      <Card idx={8}/>
      <Card idx={2}/>
      <Card idx={6}/>
      <Card idx={4}/>
      <Card idx={1}/>
      </div>
      </div>
    </div>
  );
};

export default Follow;
