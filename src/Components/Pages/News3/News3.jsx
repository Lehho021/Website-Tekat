import React from "react";
import "./news3.css";
import bg from "../../../Assets/grid.png";
import { BsArrowLeftShort } from "react-icons/bs";

const News3 = () => {
  return (
    <section className="news3 container section">
      <div className="secContainer">
        <a href="/news" className="back flex">
          <BsArrowLeftShort className="icon" />
          <p>Back</p>
        </a>
        <div className="mainContent Grid">
          <div className="singleNews3">
            <div className="news3image flex">
              <img src={bg} alt="" />
            </div>

            <div className="amenities3 flex">
              <div className="singleAmenities3 flex">
                <span>INTRODUCING OUR STAGE PERFORMANCE</span>
              </div>
            </div>
            <div className="amenity3 flex">
              <div className="singleAmenity3">
                <p>
                Introducing our performances, Rich brian and Niki are artists from Indonesia who have successfully entered the international song market, Rich Brian started his fame through a song titled "Dat $tick", the song attracted a lot of listeners, especially teenagers from Indonesia. Niki Zefanya, known as NIki. "High School In Jakarta" is ready to be sung by NIki on Tekat 2023 stage.
                </p>
                <br></br>
                <p>
                Afgan, Ardhito, Ariel, Hindia, Lyodra, Pamungkas, Tiara Andini, and Tulus. Top solo singers from Indonesia who are ready to attend and enliven the Tekat 2023 concert.
                </p>
                <br></br>
                <p>
                JKT48 and Seringai as groups that are liked by Indonesian people are also ready to come to entertain us all. Prepare yourselves!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News3;
