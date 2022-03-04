import "./Header.css";
import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container headercontainer">
        <h5> Hello I'm </h5>
        <h1> Gero </h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="Hi-thats-me" />
        
        </div>
        <a href="#contact" className="sd"> Scroll Down </a>
      </div>
    </header>
  );
}
