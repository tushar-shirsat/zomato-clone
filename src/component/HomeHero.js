import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeHero = () => {
  return (
    <Container>
      <ContainerList>
        <li>
          <NavLink to="/">
            <ImageContainer className="img-container" style={{background: 'rgb(252, 238, 192)'}}>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt="delivery"
              />
            </ImageContainer>
              <h4>Delivery</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dine-out">
            <ImageContainer className="img-container" style={{background: 'rgb(229, 243, 243)'}}>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                alt="dining_out"
              />
            </ImageContainer>
              <h4>Dining Out</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="/nutrition">
            <ImageContainer className="img-container" style={{background: 'rgb(248, 248, 248)'}}>
              <img
                src="https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png"
                alt="nutrition"
              />
            </ImageContainer>
              <h4>Nutrition</h4>
          </NavLink>
        </li>
      </ContainerList>
    </Container>
  );
};

export default HomeHero;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
const ContainerList = styled.ul`
  display: flex;
  align-items: center;
  li{
      padding: 20px;
      position: relative;
      a{
          display: flex;
          align-items: center;
          gap: 10px;
          h4{
              font-size: 20px;
              color: gray;
              font-weight: 500;
              transition: all 250ms ease !important;
          }
        }
        &:before{
           position: absolute;
           content: "";
           width: 100%;
           height: 2px;
           background: #ff7675;
           left: 0;
           bottom: 0;
           transform: scaleX(0);
           transform-origin: center;
           transition: all 250ms ease !important;
        }
        &:hover{
            a{
                h4{
                    color: #ff7675;
                }
            }
            &:before{
                transform: scaleX(1);
            }
        }
  }
`;


const ImageContainer = styled.div`
width: 60px;
height: 60px;
display: grid;
place-items: center;
border-radius: 50%;

img{
    height: 30px;
    object-fit: contain;
}
`;