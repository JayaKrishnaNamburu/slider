import { Swiper } from "swiper";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export class Slider {
  #sliderInstances = {};

  init = () => {
    const sliderElements = document.querySelectorAll('[data-thq="slider"]');
    for (const sliderElement of sliderElements) {
      const identifier = Array.from(sliderElement.classList).join(".");
      const properties = sliderElement.dataset;
      const nextButton = sliderElement.querySelector(
        '[data-thq="slider-button-next"]',
      );
      const prevButton = sliderElement.querySelector(
        '[data-thq="slider-button-prev"]',
      );
      const paginationElm = sliderElement.querySelector(
        '[data-thq="slider-pagination"]',
      );

      const autoplay = properties?.autoplay
        ? JSON.parse(properties.autoplay)
        : undefined;
      const autoPlayDelay = properties?.autoplayDelay
        ? JSON.parse(properties.autoplayDelay)
        : undefined;
      const loop = properties?.loop ? JSON.parse(properties.loop) : false;

      const modules = [Navigation, Autoplay, Pagination];

      const swiperOptions = {
        modules,
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton,
        },
        pagination: {
          el: paginationElm,
        },
        ...(loop && (autoplay || autoPlayDelay) && { loop }),
        ...(autoPlayDelay && {
          autoplay: {
            delay: autoPlayDelay,
          },
        }),
        ...(autoplay && !autoPlayDelay && { autoplay }),
      };

      const swiperInstance = new Swiper(sliderElement, swiperOptions);
      this.#sliderInstances[identifier] = swiperInstance;
    }
  };
}
