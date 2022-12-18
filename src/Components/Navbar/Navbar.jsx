import React, { useState } from "react";
import "./navbar.css";
// import logo from "../../Assets/logo.jpg";
// import { GiTicket } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

//Show Navbar
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //Close Navbar
  const removeNav = () => {
    setActive("navBar");
  };

  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1 className="flex">TEKAT</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                HOME
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/lineup"} className="navLink">
                LINE UP
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/news"} className="navLink">
                NEWS
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/information"} className="navLink">
                INFORMATION
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/faq"} className="navLink">
                FAQ
              </Link>
            </li>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className={active}>
          <ul className="navListss flex">
            <li className="navItemm">
              <a href="/login" className="navLink">
                LOGIN
              </a>
            </li>
          </ul>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
