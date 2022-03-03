import React from "react";
import "./About.css";
import aboutme from "../../assets/about-me.jpg";
import { AiOutlineStar, AiOutlineRocket, AiOutlineHeart } from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <h5> A little </h5>
      <h2> About Me </h2>

      <div className=" container aboutcontainer">
        <div className="aboutme">
          <div className="aboutmeimage">
            <img src={aboutme} alt="thats me again" />
          </div>
        </div>
        <div className="aboutcontent">
          <div className="aboutcards">
            <article className="aboutcard">
              <AiOutlineStar className="abouticon" />
              <h5> Experience </h5>
              <small>Graduating at Trybe</small>
            </article>
            <article className="aboutcard">
              <AiOutlineRocket className="abouticon" />
              <h5> Projects </h5>
              <small>20+ Projects Developed</small>
            </article>
            <article className="aboutcard">
              <AiOutlineHeart className="abouticon"  />
              <h5> Passionate </h5>
              <small>Completely in love with what I do.</small>
            </article>
          </div>

          <p>
            My current goal is to act and improve as a developer in an
            environment where I can grow professionally and develop new
            connections with passionate and trained professionals.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
