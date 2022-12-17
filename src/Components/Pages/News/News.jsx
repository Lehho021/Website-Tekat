import React, { useEffect } from "react";
import "./news.css";
import { BsArrowRightShort } from "react-icons/bs";

import img1 from "../../../Assets/ticket1.jpg";
import img2 from "../../../Assets/ticket2.jpg";
import img3 from "../../../Assets/ticket3.jpg";

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

            <div className="newsBody">
              <div className="newsTitle flex">
                <h4>TICKET EXCHANGE GUIDELINES</h4>
              </div>

              <div className="newsAmenities flex">
                <div className="singleNews flex">
                  <small>
                    Read the guideline here before you exchange your e-vouchers.
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
            <div className="news1Image">
              <img src={img3} alt="" />
            </div>

            <div className="newsBody">
              <div className="newsTitle flex">
                <h4>TEKAT IS BACK OFFLINE</h4>
              </div>

              <div className="newsAmenities flex">
                <div className="single1News flex">
                  <small>
                    After its last offline edition on 2019, one of the biggest
                    music festivals in Asia, TEKAT....
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
            <div className="news1Image">
              <img src={img3} alt="" />
            </div>

            <div className="newsBody">
              <div className="newsTitle flex">
                <h4>INTRODUCING SPECIAL STAGE</h4>
              </div>

              <div className="newsAmenities flex">
                <div className="single1News flex">
                  <small>
                    Be a part of our much-anticipated return. Tekat will be back
                    offline...
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
