import React from "react";
import "./information.css";
import mapvenue from "../../../Assets/mapvenue.jpg";
import logo1 from "../../../Assets/logo1.jpg";

const Information = () => {
  return (
    <section className="Information container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">INFORMATION</h2>
        </div>

        <div className="mainContent grid">
          <div className="infoImage">
            <img src={mapvenue} alt="tekat" />
          </div>
        </div>

        <div className="brand">
          <div className="secIntro">
            <p className="secTitle">
              A FESTIVAL EXPERIENCE BY <span>TEKAT</span>
            </p>
          </div>
        </div>

        <div className="mainLogo">
          <div className="logo">
            <img src={logo1} alt="tekat" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
