import React, { useEffect } from "react";
import "./about.css";

import video from "../../Assets/bg-video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <div className="mainContent container grid"></div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>TEKAT TRAILER</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                nulla tempore sunt nesciunt corporis, dignissimos placeat optio
                expedita excepturi quasi ipsum ducimus? Enim, ex tempore modi
                accusamus sit perferendis cumque!
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
