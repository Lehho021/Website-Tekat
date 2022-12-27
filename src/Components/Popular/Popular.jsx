import React from "react";
import "./popular.css";
import Marquee from "react-fast-marquee";
import marque1 from "../../Assets/marque1.png";
import marque2 from "../../Assets/marque2.png";
import marque3 from "../../Assets/marque3.png";
import marque4 from "../../Assets/marque4.png";

const Popular = () => {
  return (
    <div className="popular container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">LINE UP</h2>
        </div>
      </div>

      <div>
        <Marquee direction="left" speed={100}>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque1} alt="" />
              </div>
              <p className="artis1">SERINGAI</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis2">TULUS</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis3">TIARA</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis4">BRIAN</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque4} alt="" />
              </div>
              <div className="artis1">PAMUNGKAS</div>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis2">HINDIA</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis3">ARIEL</p>
            </div>
          </div>
        </Marquee>
      </div>

      <div>
        <Marquee direction="right" speed={100}>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque1} alt="" />
              </div>
              <p className="artis1">AFGAN</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis2">LYODRA</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis3">JKT 48</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis4">NIKI</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque4} alt="" />
              </div>
              <div className="artis1">ARDHITO</div>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis2">SERINGAI</p>
            </div>
          </div>
        </Marquee>
      </div>

      <div>
        <Marquee direction="left" speed={100}>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque1} alt="" />
              </div>
              <p className="artis1">ARDHITO PRAMONO</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis2">NIKI</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis3">TULUS</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis4">
                JKT 48
              </p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque4} alt="" />
              </div>
              <div className="artis1">LYODRA</div>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis2">HINDIA</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Popular;
