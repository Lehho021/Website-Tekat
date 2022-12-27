import React from "react";
import "./news3.css";
import bg from "../../../Assets/grid1.png";
import { BsArrowLeftShort } from "react-icons/bs";

const News3 = () => {
  return (
    <section className="news3 container section">
      <div className="secContainer">
        <a href="/news" className="back flex">
          <BsArrowLeftShort className="icon" />
          <p>Back</p>
        </a>
        <div className="mainContent Grid">
          <div className="singleNews3">
            <div className="news3image flex">
              <img src={bg} alt="" />
            </div>

            <div className="amenities3 flex">
              <div className="singleAmenities3 flex">
                <span>INTRODUCING SPECIAL STAGE PERFORMANCE</span>
              </div>
            </div>
            <div className="amenity3 flex">
              <div className="singleAmenity3">
                <p>
                  Be a part of our much-anticipated return. Djakarta Warehouse
                  Project will be back offline, in this year’s edition will be
                  enlivened by two special stage performance by Yellow Claw’s
                  Label — Barong Family, which will host a special stage with
                  super-charged sets from Euro Trash, Moksi, Jengi, Sihk, and
                  SkySky Followed by The Darker Side — this is where you can
                  find the best underground beats at DWP22 with an immersive
                  experience featuring Anfisa Letyago, Shiba San, Chace,
                  Devarra, and Kya. Moreover, it will also brighten up with the
                  other names and surprises, in alphabetical order: Acraze,
                  Andrew Rayel, Armin Van Buuren Cedric Gervais, DJ Snake,
                  Gareth Emery, Hardwell, Illenium, Lost Frequencies, Madeon,
                  Martin Garrix, Nervo, Regard, Slushii, Whethan, Yellow Claw,
                  Zedd, Beauz, BJones, Cyberjapan, Dipha Barus, Mandy, Weird
                  Genius, Winky Wiryawan + Osvaldo Nugroho & Sara Fajira, W.w,
                  Alyshia, AOY, Atsy x Taner, Evan Virgan, Kenji, Kimm, Patricia
                  Schuldtz, Six Pratama, Teddy Doox, Whisnu Santika + Liquid
                  Silva, Mc Bam, and Mc Drewe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News3;
