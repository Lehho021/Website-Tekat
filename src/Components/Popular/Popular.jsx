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
              <p className="artis3">GEISHA</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis4">DISKORIA</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque4} alt="" />
              </div>
              <div className="artis1">KOTAK</div>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis2">JASON RANTI</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis3">PROJECT POP</p>
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
              <p className="artis1">SOEGI BORNEAN</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis2">TIARA ANDINI</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis3">MELANCHOLIC BITCH</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis4">SISITIPSI</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque4} alt="" />
              </div>
              <div className="artis1">ISYANA SARAVASTI</div>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis2">HIPHOP BY TUAN TIGABELAS</p>
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
              <p className="artis2">GUGUN BLUES SHELTER</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis3">AFGAN</p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque2} alt="" />
              </div>
              <p className="artis4">
                TRIBUTE TO KOES PLUS (VINCENT, DESTA, ENDAH N RHESA)
              </p>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque4} alt="" />
              </div>
              <div className="artis1">MONKEY TO MILLIONAIRE</div>
            </div>
          </div>
          <div className="LineUP">
            <div className="titleLineUP flex">
              <div className="image_wrapper flex">
                <img src={marque3} alt="" />
              </div>
              <p className="artis2">SHAGGYDOG</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Popular;
