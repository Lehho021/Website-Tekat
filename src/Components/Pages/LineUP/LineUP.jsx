import React, { useEffect } from "react";
import "./lineUP.css";

import mapvenue from "../../../Assets/mapvenue.jpg";
import tulus from "../../../Assets/tulus.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const LineUP = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="lineup container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            LINE UP
          </h2>
        </div>
        <div className="infoLineUP">
          <img src={mapvenue} alt="information" />
        </div>
        <div className="mainContainer grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singlePost grid"
          >
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
            <div className="imgDiv">
              <img src={tulus} alt="artis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineUP;
