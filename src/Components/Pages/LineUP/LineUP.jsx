import React, { useEffect } from "react";
import "./lineUP.css";

import mapvenue from "../../../Assets/mapvenue.jpg";
import tulus from "../../../Assets/tulus.jpg";
import tiara from "../../../Assets/tiara.jpg";
import brian from "../../../Assets/brian.jpg";
import niki from "../../../Assets/niki.jpg";
import pamungkas from "../../../Assets/pamungkas.jpg";
import hindia from "../../../Assets/hindia.jpg";
import ardhito from "../../../Assets/ardhito.jpg";
import seringai from "../../../Assets/seringai.jpg";
import ariel from "../../../Assets/ariel.jpg";
import jkt48 from "../../../Assets/jkt48.jpg";
import afgan from "../../../Assets/afgan.jpg";
import lyodra from "../../../Assets/lyodra.jpg";

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
              <div className="titleArtis">
                <img src={tulus} alt="artis" />
                <h4>Tulus</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={tiara} alt="artis" />
                <h4>Tiara</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={brian} alt="artis" />
                <h4>Brian</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={niki} alt="artis" />
                <h4>Niki</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={pamungkas} alt="artis" />
                <h4>Pamungkas</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={hindia} alt="artis" />
                <h4>Hindia</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={ardhito} alt="artis" />
                <h4>Ardhito</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={seringai} alt="artis" />
                <h4>Seringai</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={ariel} alt="artis" />
                <h4>Ariel</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={jkt48} alt="artis" />
                <h4>JKT 48</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={afgan} alt="artis" />
                <h4>Afgan</h4>
              </div>
            </div>
            <div className="imgDiv">
              <div className="titleArtis">
                <img src={lyodra} alt="artis" />
                <h4>Lyodra</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineUP;
