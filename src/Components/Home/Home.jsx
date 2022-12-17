import React, { useEffect } from "react";
import "./home.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <div className="imgDiv"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
