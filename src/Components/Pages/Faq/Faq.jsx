import React, { useEffect } from "react";
import "./faq.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Offer = [
  {
    price: "WHEN’S THE BEST TIME TO ARRIVE?",
    text: "We think it will be best to come early. So you’ll get the full experience. We open at 4 after noon.!",
    text1:
      "Akan lebih baik apabila kalian datang lebih awal. Gate akan dibuka jam 4 sore.",
  },

  {
    price: "TEKAT IS BACK OFFLINE",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },

  {
    price: "KAMU NANYA",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quam!",
  },
];

const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="faq container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">FAQ</h2>
        </div>

        <div className="mainContent grid">
          {Offer.map(({ price, text, text1 }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="singleOffers"
              >
                <div className="offersBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <small>{text}</small>
                    </div>
                  </div>
                  <div className="amenity flex">
                    <div className="singleAmenityy">
                      <small>{text1}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
