import React, { useEffect } from "react";
import "./brand.css";

import Brand1 from "../../Assets/Brand1.png";
import Brand2 from "../../Assets/Brand2.png";
import Brand3 from "../../Assets/Brand3.png";
import Brand4 from "../../Assets/Brand4.png";
import Brand5 from "../../Assets/Brand5.png";
import Brand6 from "../../Assets/Brand6.png";
import Brand7 from "../../Assets/Brand7.png";
import Brand8 from "../../Assets/Brand8.png";
import Brand9 from "../../Assets/Brand9.png";
import Brand10 from "../../Assets/Brand10.png";
import Brand11 from "../../Assets/Brand11.png";
import Brand12 from "../../Assets/Brand12.png";

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
          <h2 className="secTitle">SPONSORS & PARTNERS</h2>
        </div>

        <div className="mainContent grid">
          <div className="brandImage">
            <p>Official Partner</p>
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
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand7} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand8} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand9} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand10} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand11} alt="artis" />
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={Brand12} alt="artis" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
