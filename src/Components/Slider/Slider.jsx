import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./slider.css";

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.image} interval={slide.interval}>
            <LazyLoadImage
              key={slide.image}
              className="d-block w-100"
              src={slide.image}
              alt="First slide"
              effect="blur"
              placeholderSrc={slide.placeholder}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
