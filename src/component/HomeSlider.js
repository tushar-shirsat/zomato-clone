import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";

const HomeSlider = ({ data,title,Height,Width,show,bg,text }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
  };
  return (
    <div style={{ background: `${bg}`, width: "100%" }}>
      <SliderContainer>
        <h4>{title}</h4>
        <Carousel {...settings}>
          {data?.map((item,index) => {
            return (
              <Wrap key={index}>
                <Zoom>
                  <ImageContainer Height={Height}  Width={Width}>
                    <img
                      src={item.imgUrl}
                      alt="name"
                    />
                  </ImageContainer>
                </Zoom>
                  <h5 style={{textAlign: `${text}`}}>{item.name}</h5>
              </Wrap>
            );
          })}
        </Carousel>
      </SliderContainer>
    </div>
  );
};

export default HomeSlider;

const SliderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 0;
  h4 {
    font-size: 30px;
    font-weight: 500;
  }
`;

const Wrap = styled.div`
  h5 {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Carousel = styled(Slider)`
  margin-top: 30px;
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
    color: #000;
  }
  .slick-active:not(:last-child) {
    padding-right: 10px;
  }
  
`;

const ImageContainer = styled.div`
  height: ${props => `${props.Height}`};
  width: ${props => `${props.Width}`};
  transition-duration: 300ms !important;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 12px rgb(0 0 0/ 8%);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h5 {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
  }
`;
