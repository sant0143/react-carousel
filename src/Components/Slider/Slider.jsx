import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import "./slider.css";

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container className="container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.image} interval={slide.interval}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Slider;