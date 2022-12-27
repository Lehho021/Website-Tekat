import React from "react";
import "./news2.css";
import bg from "../../../Assets/backoff.jpg";
import { BsArrowLeftShort } from "react-icons/bs";

const News2 = () => {
  return (
    <section className="news2 container section">
      <div className="secContainer">
        <a href="/news" className="back flex">
          <BsArrowLeftShort className="icon" />
          <p>Back</p>
        </a>
        <div className="mainContent Grid">
          <div className="singleNews2">
            <div className="news2image flex">
              <img src={bg} alt="" />
            </div>

            <div className="amenities2 flex">
              <div className="singleAmenities2 flex">
                <span>TEKAT IS HERE</span>
              </div>
            </div>
            <div className="amenity2 flex">
              <div className="singleAmenity2">
                <p>
                After the Covid-19 pandemic, everyone would want to experience gathering and singing with their idols. Likewise with idols, wanting to bring their songs to sing with their fans. This is it, TEKAT 2023, a place where you can gather and sing with top Indonesian singers like Niki, Rich Brian, Ardhito Pramono, and others. Come and sing along with your idol!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News2;
