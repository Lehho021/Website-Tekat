import React, { useEffect } from "react";
import "./offers.css";

import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img1 from "../../Assets/ticket1.jpg";
import img2 from "../../Assets/ticket2.jpg";
import img3 from "../../Assets/ticket2.jpg";
import img4 from "../../Assets/ticket4.jpg";
import img5 from "../../Assets/ticket5.jpg";
import img6 from "../../Assets/ticket6.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Offer = [
  {
    id: 1,
    imgSrc: img4,
    concertTitle: "Hola",
    price: "IDR 8800K",
    text: "PLATINUM PRESALE PACKAGE",
  },

  {
    id: 2,
    imgSrc: img5,
    concertTitle: "Hola",
    price: "IDR 3200K",
    text: "GOLD PRESALE PACKAGE",
  },

  {
    id: 3,
    imgSrc: img6,
    concertTitle: "Hola",
    price: "IDR 1660K",
    text: "SILVER PRESALE PACKAGE",
  },
  {
    id: 4,
    imgSrc: img4,
    concertTitle: "Hola",
    price: "IDR 1520K",
    text: "BRONZE PRESALE PACKAGE",
  },

  {
    id: 5,
    imgSrc: img5,
    concertTitle: "Hola",
    price: "IDR 1460K",
    text: "VIP (DAILY PASS) EARLY ENTRY",
  },

  {
    id: 6,
    imgSrc: img6,
    concertTitle: "Hola",
    location: "Grand Orchard Kemayoran",
    price: "IDR 720K",
    text: "DAILY PASS",
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
          <h2 className="secTitle">BUY TICKETS ONLINE</h2>
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
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <small>{text}</small>
                      </div>
                    </div>
                    <a
                      href="https://www.jotform.com/app/223604328714453"
                      className="btn flex"
                    >
                      BUY TICKETS
                      <BsArrowRightShort className="icon" />
                    </a>
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
