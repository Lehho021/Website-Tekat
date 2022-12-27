import React, { useEffect } from "react";
import "./news.css";

import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img1 from "../../../Assets/exchange.jpg";
import img2 from "../../../Assets/back.jpg";
import img3 from "../../../Assets/logo2.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const News = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="news container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">NEWS</h2>
        </div>

        <div className="mainContent grid">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleNews"
          >
            <div className="newsImage">
              <img src={img1} alt="" />
            </div>

            <div className="offersBody">
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <small>
                    EXCHANGE YOUR E-TICKET
                  </small>
                </div>
              </div>

              <a href="/news1" className="btn flex">
                View Details
                <BsArrowRightShort className="icon" />
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleNews"
          >
            <div className="newsImage">
              <img src={img2} alt="" />
            </div>

            <div className="offersBody">
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <small>
                    TEKAT IS HERE
                  </small>
                </div>
              </div>

              <a href="/news2" className="btn flex">
                View Details
                <BsArrowRightShort className="icon" />
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleNews"
          >
            <div className="newsImage">
              <img src={img3} alt="" />
            </div>

            <div className="offersBody">
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam, est.
                  </small>
                </div>
              </div>

              <a href="/news3" className="btn flex">
                View Details
                <BsArrowRightShort className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
