import React, { useEffect } from "react";
import "./blog.css";

import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assets/ticket1.jpg";
import img2 from "../../Assets/ticket1.jpg";
import img3 from "../../Assets/ticket1.jpg";
import img4 from "../../Assets/ticket1.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Posts = [
  {
    id: 1,
    postImage: img,
    title: "Joylands",
    desc: "Joyland Festival 2023, bukan Festival yang ‘Itu-Itu Aja’. Joyland dan nama itu memang benar-benar mewakili apa yang kami rasakan selama tiga hari menghadiri salah satu festival musik garapan Plainsong Live tersebut.",
  },
  {
    id: 2,
    postImage: img2,
    title: "Pesta Pora",
    desc: "Pestapora adalah selebrasi terbaru pertunjukan musik Indonesia, yang diselenggarakan oleh Boss Creator. Perayaan musik pertama ini akan hadir selama tiga hari.",
  },
  {
    id: 3,
    postImage: img3,
    title: "DWP",
    desc: "One of the biggest dance music festivals in Asia is back! Djakarta Warehouse Project will return on 9, 10, 11 Dec 2022 at JIEXPO Kemayoran.",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            LATEST NEWS
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            Try the experience from concert in Indonesia
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3 data-aos="fade-left" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-left" data-aos-duration="4000">
                    {desc}
                  </p>

                  <a
                    href="/news"
                    className="flex"
                    data-aos="fade-up"
                    data-aos-duration="4500"
                  >
                    Read More
                    <BsArrowRightShort className="icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
