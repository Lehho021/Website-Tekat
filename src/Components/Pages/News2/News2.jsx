import React from "react";
import "./news2.css";
import bg from "../../../Assets/bg.jpg";
import { BsArrowLeftShort } from "react-icons/bs";

const News2 = () => {
  return (
    <section className="news2 container section">
      <div className="secContainer">
        <a href="/news" className="back flex">
          <BsArrowLeftShort className="icon" />
          <p>Back</p>
        </a>
        <div className="mainContent Grid">
          <div className="singleNews2">
            <div className="news2image flex">
              <img src={bg} alt="" />
            </div>

            <div className="amenities2 flex">
              <div className="singleAmenities2 flex">
                <span>TEKAT IS BACK OFFLINE</span>
              </div>
            </div>
            <div className="amenity2 flex">
              <div className="singleAmenity2">
                <p>
                  After its last offline edition on 2019, one of the biggest
                  music festivals in Asia, Djakarta Warehouse Project (DWP),
                  will be back offline after two years of being held online,
                  which will be held on 9, 10 & 11 December 2022 at JIEXPO
                  Kemayoran, Jakarta. In alphabetical order, Armin Van Buuren,
                  DJ and Producer who has won the top position 5 times on the
                  Top 100 DJs from DJ Mag, his name is also listed as one of the
                  Grammy Award nominations for the album “This Is What It Feels
                  Like” featuring Trevor Guthrie. In July, Armin Van Buuren also
                  just released the song “One More Time,” featuring Maia Wright
                  through his own music label, Armada Music. Furthermore,
                  enlivening the line-up, there is DJ Snake as a DJ, producer
                  and DJ songwriter from France who has collaborated with
                  various big names in the music world such as Justin Bieber,
                  Megan Thee Stallion, Lisa “BLACKPINK”, and various other big
                  global musicians. After four-year hiatus from touring,
                  Hardwell who is currently back on his “Rebels Never Die” world
                  tour will also making an appearance at DWP 2022. Hardwell is
                  currently preparing to release his album, and has been
                  releasing singles, “I Feel like dancing” which was just
                  released on August 12, 2022 and is track number 12 on the
                  album chart. The other five big names announced were Illenium,
                  an American musician, DJ and producer, who is included in the
                  “Forbes 30 under 30” music list and has received a Grammy
                  nomination for his fourth album “Fallen Ambers” as best
                  dance/electronic album. Madeon, a French DJ and producer,
                  which his second album “Good Faith” was also nominated for a
                  Grammy Award. In addition, Madeon has also assisted in the
                  production of a number of songs by global artists, such as
                  Lady Gaga and Coldplay. Martin Garrix, as one of the youngest
                  and most successful DJs in the realm of pop and electronic
                  music where one of the songs he wrote and produced with Avicii
                  reached 1 billion listeners on Spotify. Yellow Claw, a DJ Duo
                  from the Netherlands who has collaborated with many Indonesian
                  musicians such as Weird Genius and Ramengvrl and has the
                  biggest listeners in Jakarta, and Zedd, a multi-platinum DJ
                  and producer who has won a Grammy Award and received several
                  nominations and has various hit singles such as “The Middle”
                  which has been listened to by more than 1 billion listeners.
                  “In order to celebrate the spirit of the return of Djakarta
                  Warehouse Project 2022, after two years of being held online,
                  DWP22 will bring together a spectacular world-class DJ and
                  musician from various diverse genres and will bring a variety
                  of experiences that electronic dance music and music lovers
                  have been waiting for. so that we can all celebrate the joy of
                  Djakarta Warehouse Project together again,” said David Ferdian
                  as Director of Ismaya Live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News2;
