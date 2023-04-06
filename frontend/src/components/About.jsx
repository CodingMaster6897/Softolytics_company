import React from "react";
import "./About.css";
import google from "../assets/google-partners.png";
import { Link } from "react-router-dom";
import scroll from "../assets/scroll-down.png";

const About = () => {
  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="section about" id="about">
        <div className="container">
          {/* <div className="small-header">Who We Are</div> */}
          <div className="inner-container">
            <div className="main-header">
              <h1>About Us</h1>
            </div>
            <p>
              2 Tech Brothers is a full-service Web Design , Creative and
              Marketing Agency offering results-driven services and exceptional
              customer support.
            </p>
            <p>
              In today’ ultra competitive world it is absolutely imperative that
              businesses irrespective of their size have web presence. Since our
              professional and talented team has been helping clients large and
              small in almost every sector establish and implement online
              strategies that have resulted in digital success stories. We
              understand very well that a website is an interface for business
              and companies that want to strengthen their brand and grow their
              profits come to us for modern design and marketing services.
              Clients have used us to manage every element of their digital
              presence.
            </p>
            <div className="fancy-text">
              We are Friendly, Talented, Inspired & Result Oriented.
            </div>
            <div className="google-partners">
              <div className="google">
                <img src={google} alt="Google Partners" />
              </div>
              <div className="certification">Our Certifications</div>
            </div>
          </div>
        </div>
        <div className="section-line"></div>
        <div className="scroll-down">
          <div className="scroll-down-arrow">
            {/* <div className="scroll-down-text">Scroll Down</div> */}
            <Link to="#about" onClick={(e) => smoothScroll(e, "#ser")}>
              <div className="scroll-down-img-container">
                <img
                  className="scroll-down-img"
                  src={scroll}
                  alt="scroll down"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
