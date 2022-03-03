import "./Experience.css";
import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineBulb,
  AiOutlineFire,
} from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

export default function Experience() {
  return (
    <section id="experience">
      <h5> My Skills</h5>
      <h2> my experience</h2>
      <div className="container experiencecontainer">
        <div className="experienced">
          <h3> Consistent Skills</h3>
          <div className="xpC">
            <article className="experiencedetails">
              <AiOutlineCheckCircle className="experiencedetailsicon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"> Intermediary</small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineCheckCircle className="experiencedetailsicon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"> Intermediary</small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineFire className="experiencedetailsicon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light"> Strong </small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineCheckCircle className="experiencedetailsicon" />
              <div>
                <h4>API Consuption</h4>
                <small className="text-light"> Intermediary</small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineFire className="experiencedetailsicon" />
              <div>
                <h4>React</h4>
                <small className="text-light"> Strong</small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineFire className="experiencedetailsicon" />
              <div>
                <h4>Agile Methods</h4>
                <small className="text-light"> Strong</small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineCheckCircle className="experiencedetailsicon" />
              <div>
                <h4>RTL</h4>
                <small className="text-light"> Intermediary </small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineFire className="experiencedetailsicon" />
              <div>
                <h4>ContextApi</h4>
                <small className="text-light"> Strong</small>
              </div>
            </article>
            <article className="experiencedetails">
              <AiOutlineCheckCircle className="experiencedetailsicon" />
              <div>
                <h4>Hooks</h4>
                <small className="text-light"> Intermediary</small>
              </div>
            </article>
          </div>
        </div>
        <div className="todevelop">
          <h3> Skills Yet To Be Developed</h3>
          <div className="xpC" >
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>Docker</h4>
              <small className="text-light"> Soon... </small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>SQL</h4>
              <small className="text-light"> Soon... </small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>Node.js</h4>
              <small className="text-light"> Soon... </small>
            </div>
          </article>
          <article className="experiencedetails">
            <AiOutlineBulb className="experiencedetailsicon" />
            <div>
              <h4>Deployment</h4>
              <small className="text-light"> Beginner</small>
            </div>
          </article>
          <article className="experiencedetails">
            <AiOutlineBulb className="experiencedetailsicon" />
            <div>
              <h4>Typescript</h4>
              <small className="text-light"> Beginner</small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>POO and Solid</h4>
              <small className="text-light"> Soon... </small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>MongoDB</h4>
              <small className="text-light"> Soon...</small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>VPS CI/CD</h4>
              <small className="text-light"> Soon... </small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>Python</h4>
              <small className="text-light"> Soon...</small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>Web Scraping </h4>
              <small className="text-light"> Soon...</small>
            </div>
          </article>
          <article className="experiencedetails">
            <BiLoaderCircle className="experiencedetailsicon" />
            <div>
              <h4>Data structuring </h4>
              <small className="text-light"> Soon...</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  );
}
