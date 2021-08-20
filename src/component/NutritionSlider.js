import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import Slider from "react-slick";

const NutritionSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Carousel>
      <Zoom>
        <Wrap>
          <img
            src="https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png"
            alt="nutrition-slider"
          />
        </Wrap>
      </Zoom>
      <Zoom>
        <Wrap>
          <img
            src="https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png"
            alt="nutrition-slider"
          />
        </Wrap>
      </Zoom>
      <Zoom>
        <Wrap>
          <img
            src="https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png"
            alt="nutrition-slider"
          />
        </Wrap>
      </Zoom>
      <Zoom>
        <Wrap>
          <img
            src="https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png"
            alt="nutrition-slider"
          />
        </Wrap>
      </Zoom>
      <Zoom>
        <Wrap>
          <img
            src="https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png"
            alt="nutrition-slider"
          />
        </Wrap>
      </Zoom>
      <Zoom>
        <Wrap>
          <img
            src="https://b.zmtcdn.com/web/nutrition/assets/6070ce964372e9e39c5bf6345a7bf78c1620108789.png"
            alt="nutrition-slider"
          />
        </Wrap>
      </Zoom>
      <Zoom>
        <Wrap>
          <img
            src="https://b.zmtcdn.com/web/nutrition/assets/136f6056ec55c6431172d5405cb645761620108811.png"
            alt="nutrition-slider"
          />
        </Wrap>
      </Zoom>
    </Carousel>
  );
};

export default NutritionSlider;

const Carousel = styled(Slider)`
max-width: 1100px;
margin: 0 auto;
width: 100%;
margin-top: 20px;
  button {
    z-index: 1000;
  }
  .slick-prev {
    left: 0 !important;
    width: 40px;
    height: 40px;
  }
  .slick-next {
    right: 0 !important;
  }
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    box-shadow: 0px 3px 12px rgb(0 0 0/ 8%);
    color: #fff;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 12px rgb(0 0 0/ 8%);
    transition-duration: 300ms;
  }
`;
