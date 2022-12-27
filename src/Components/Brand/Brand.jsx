import React, { useEffect } from "react";
import "./brand.css";

import Brand1 from "../../Assets/brand1.png";
import Brand2 from "../../Assets/brand2.png";
import Brand3 from "../../Assets/brand3.png";
import Brand4 from "../../Assets/brand4.png";
import Brand5 from "../../Assets/brand5.png";
import Brand6 from "../../Assets/brand6.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Brand = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="brand container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">OFFICIAL SPONSORS</h2>
        </div>

        <div className="mainContent grid">
          <div className="brandImage">
            <p>Official Beer Partner</p>
            <img src={Brand1} alt="" />
          </div>
        </div>

        <div className="main1Content grid">
          <div className="support-logo">
            <h4>Supporting Partners</h4>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singlePost grid"
          >
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand2} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand3} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand4} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand5} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand6} alt="artis" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
