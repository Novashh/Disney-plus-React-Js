import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    transition-duration: 300ms;
  }

  &:hover {
    border: 2px solid white;
  }
`;
