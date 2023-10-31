import React, { useEffect } from "react";
import { Slider } from "./slider";
import { Helmet } from "react-helmet";

import "./home.css";

const Home = (props) => {
  useEffect(() => {
    new Slider().init();
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>Thorough Great Ibis</title>
        <meta property="og:title" content="Thorough Great Ibis" />
      </Helmet>
      <div data-thq="slider" className="home-swiper swiper test">
        <div data-thq="slider-wrapper" className="swiper-wrapper">
          <div
            data-thq="slider-slide"
            className="home-slider-slide swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide1 swiper-slide"
          ></div>
          <div
            data-thq="slider-slide"
            className="home-slider-slide2 swiper-slide"
          ></div>
        </div>
        <div
          data-thq="slider-pagination"
          class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div class="swiper-pagination-bullet swiper-pagination-bullet-active"></div>
          <div class="swiper-pagination-bullet"></div>
          <div
            class="swiper-pagination-bullet"
            style={{ backgroundColor: "red" }}
          ></div>
        </div>
        <div data-thq="slider-button-prev" className="swiper-button-prev"></div>
        <div data-thq="slider-button-next" className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Home;
