import React from "react";
import styled from "styled-components";

const NutritionCard = ({imgUrl,title,info,price,type}) => {
  return (
    <Card>
      <ImageContainer>
        <img
          src={imgUrl}
          alt={title}
        />
      </ImageContainer>
      <Info>
          <div className="veg">
              <div className="dot"></div>
          </div>
          <h3>{title} </h3>
          <p className="info">{info}</p>
          <div className="bottom">
              <span className="price">₹{price}</span><span className="pack">monthly pack - 30 {type}</span>
          </div>
      </Info>
    </Card>
  );
};

export default NutritionCard;

const Card = styled.div`
`;

const ImageContainer = styled.div`
background: rgb(229, 243, 243);
width: 100%;
height: 248px;
border-radius: 10px;
overflow: hidden;
box-shadow: 0px 3px 12px rgba(0 0 0 / 8%);
position: relative;
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`;

const Info = styled.div`
    margin-top: 10px;

    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
        text-transform: capitalize;
      }

    .veg{
        width: 13px;
        height: 13px;
        border: 1px solid rgb(80, 181, 71);
        display: grid;
        place-items: center;
        margin-bottom: 10px;
        .dot{
            width: 6.5px;
            height: 6.5px;
            border-radius: 50%;
            background-color: rgb(80, 181, 71);
        }
    }
    .info{
        color: #696969;
        font-size: 16px;
        line-height: 150%;
    }
    .bottom{
        margin-top: 15px;

        .price{
            font-size: 16px;
            font-weight: bold;
        }

        .pack{
            color: #696969;
            font-size: 16px;
            line-height: 150%;
            margin-left: 10px;
        }
    }
`;
