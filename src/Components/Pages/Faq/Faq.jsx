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
    price: "WHAT WILL I SEE INSIDE THE FESTIVAL?",
    text: "More than just music! There’s also good food and interesting activities inside the festival!",
    text1: "Bukan hanya sekadar musik. Kalian juga akan menemukan makanan dan juga aktifitas menarik di dalam area festival.",
  },

  {
    price: "CAN I BRING A RAINCOAT?",
    text: "Feel free to bring your raincoat, but leave your umberella at home.",
    text1: "Tentu saja, silahkan bawa jas hujanmu, akan tetapi payung tidak diperbolehkan untuk dibawa ke area festival.",
  },

  {
    price: "WHAT ARE CONSIDERED PROFESSIONAL CAMERAS AND PROFESSIONAL DIGITAL CAMERAS? IS IT ALLOWED?",
    text: "Professional cameras are the ones you used to make money out of. Yes, those kinds are allowed! Take pictures as much as you want and share them!",
    text1: "Kamera apapun diperbolehkan. Silahkan mengambil foto sebanyak-banyaknya.",
  },

  {
    price: "SO CAN I BRING VIDEO CAMERA IN TOO?",
    text: "Professional broadcast video camera are not allowed",
    text1: "Dilarang membawa jenis video kamera profesional yang biasa digunakan untuk kualitas siaran TV.",
  },

  {
    price: "WHAT SHOULD WE WEAR?",
    text: "You can wear anything that is comfortable to you. Wear comfy shoes instead of sandals. But make sure you don’t wear anything that is prohibited.",
    text1: "Kenakan saja pakaian yang nyaman menurut anda. Namun sangat disarankan mengenakan sepatu yang nyaman dan tidak merepotkan kamu (sneakers, sepatu keds). Pastikan anda tidak mengenakan sesuatu yang bertentangan dengan aturan kami.",
  },

  {
    price: "IS THERE ANY FOOD? OR CAN WE BRING FOOD INSIDE?",
    text: "You can’t bring food inside the festival area. But, all great delicious food are provided by Ismaya Group Resto concept inside the festival area. Just remember to bring a LOT of money. We mean it!",
    text1: "Dilarang membawa makanan dan minuman dari luar. Ismaya Group akan menyediakan konsep resto F&B yang akan menyediakan makanan dan minuman buat kalian selama festival berlangsung. Pastikan anda membawa uang yang cukup.",
  },

  {
    price: "IS THERE ANY ATM ON THE FESTIVAL AREA?",
    text: "Yes, we have ATM on site. You can check the exact spot on our venue map at the festival area.",
    text1: "Kami memiliki mesin ATM di festival area, anda bisa menemukannya di peta yang akan ada di area festival pada hari H."
  },

  {
    price: "WILL THERE BE MEDIC ON THE FESTIVAL AREA? IF YES, WHERE CAN I LOCATE IT?",
    text: "Yes of course! Medic will be provided at the venue, we will have multiple medic spots, you can check it on our venue map.",
    text1: "Ya, tentu saja! Tenaga medis akan tersedia pada saat acara berlangsung, kita mempunyai beberapa titik area medik pada saat acara berlangsung."
  },

  {
    price: "IS THERE ANY LOCKER PROVIDED IN THE FESTIVAL AREA",
    text: "Of course, but we’re recommend you not to bring any baggage to the festival area. So you can go straight to the festival area and have some fun!",
    text1: "Tentu, namun kami merekomendasi anda untuk tidak membawa tas ke area festival. Sehingga anda bisa langsung ke area festival dan bersenang – senang!"
  },

  {
    price: "WHAT’S THE DIFFERENCE BETWEEN VIP AND GA?",
    text: "Both will get you to enter the festival and experience the fun. VIP gets more classy treatment in the VIP section with its own toilet, bar, and service. You even get your own viewing area right in front of the stage. VIP and GA entrance will be separated at the venue.",
    text1: "Keduanya dapat digunakan untuk memasuki festival. Namun, apabila anda mempunyai tiket VIP, anda dapat menikmati special treatment di VIP area, seperti toilet dan bar sendiri, bahkan anda juga akan mendapatkan VIP viewing area di depan stage. Pintu masuk GA dan VIP akan dipisah."
  },

  {
    price: "WHAT DO YOU MEAN BY EARLY ENTRY TICKET?",
    text: "Anyone with this type of ticket has to enter the festival area BEFORE 6 PM, otherwise you have to top up to enter the area.",
    text1: "Siapapun yang membeli tiket jenis EARLY ENTRY harus masuk ke area festival SEBELUM pukul 18:00 atau diharuskan melakukan top up sesuai dengan harga yang berlaku saat itu."
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
