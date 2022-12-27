import React, { useEffect } from "react";
import "./offers.css";

import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img1 from "../../Assets/ticket1.jpg";
import img2 from "../../Assets/ticket1.jpg";
import img3 from "../../Assets/ticket1.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Offer = [
  {
    id: 1,
    imgSrc: img1,
    concertTitle: "Hola",
    location: "Holiday Inn JIEXPO",
    price: "IDR 8550K",
    text: "2(two) 3-Day Passes (GA/VIP) 3-nights stay",
    ticket: "Available",
  },

  {
    id: 2,
    imgSrc: img2,
    concertTitle: "Hola",
    location: "Aston Kemayoran City",
    price: "IDR 7500K",
    text: "2(two) 3-Day Passes (GA/VIP) 3-nights stay",
    ticket: "Available",
  },

  {
    id: 3,
    imgSrc: img3,
    concertTitle: "Hola",
    location: "Grand Orchard Kemayoran",
    price: "IDR 8.880K",
    text: "2(two) 3-Day Passes (GA/VIP) 3-nights stay",
    ticket: "Available",
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offers container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Travel Packages</h2>
        </div>

        <div className="mainContent grid">
          {Offer.map(
            ({ id, imgSrc, concertTitle, location, price, text, ticket }) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="singleOffers"
                >
                  <div className="concertImage">
                    <img src={imgSrc} alt={concertTitle} />
                  </div>

                  <div className="offersBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">{ticket}</span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <small>{text}</small>
                      </div>
                    </div>

                    <div className="location flex">
                      <MdLocationOn className="icon" />
                      <small>{location}</small>
                    </div>

                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Offers;
