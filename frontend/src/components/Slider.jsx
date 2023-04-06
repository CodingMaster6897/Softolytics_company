import React from "react";
import HeroSlider, { Slide, MenuNav } from "hero-slider";
import Social from "./Social";
// import "./Slider.css";
import scroll from "../assets/scroll-down.png";
import { Link } from "react-router-dom";
import img1 from "../assets/home-slider/banner.jpg";
import img2 from "../assets/home-slider/banner3.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const Slider = () => {
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
    <div id="main">
      {/* <Social /> */}
      <HeroSlider
        height={"100vh"}
        width="100%"
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide),
        }}
      >
        <Slide
          background={{
            backgroundImageSrc: img1,
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: img2,
          }}
        />{" "}
        {/* <MenuNav /> */}
      </HeroSlider>
      <div className="scroll-down">
        <div className="scroll-down-arrow">
          {/* <div className="scroll-down-text">Scroll Down</div> */}
          <Link to="#about" onClick={(e) => smoothScroll(e, "#about")}>
            <div className="scroll-down-img-container">
              <img className="scroll-down-img" src={scroll} alt="scroll down" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
