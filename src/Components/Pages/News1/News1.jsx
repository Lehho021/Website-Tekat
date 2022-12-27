import React from "react";
import "./news1.css";
import bg from "../../../Assets/teg.jpg";
import { BsArrowLeftShort } from "react-icons/bs";

const News1 = () => {
  return (
    <section className="news1 container section">
      <div className="secContainer">
        <a href="/news" className="back flex">
          <BsArrowLeftShort className="icon" />
          <p>Back</p>
        </a>
        <div className="mainContent Grid">
          <div className="singleNews1">
            <div className="news1image flex">
              <img src={bg} alt="" />
            </div>

            <div className="amenities flex">
              <div className="singleAmenities flex">
                <span>TICKET EXCHANGE GUIDELINES</span>
              </div>
            </div>
            <div className="amenity flex">
              <div className="singleAmenity">
                <p>
                  Read the guideline here before you exchange your e-vouchers.
                  You can exchange your E-Tickets on 6, 7, 8 January 2023 at the eastern parking lot of Hartono Mall, from 11:00 - 21:00 PM (daily). Don't forget to show proof of payment and ticket barcodes to the crew
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News1;
