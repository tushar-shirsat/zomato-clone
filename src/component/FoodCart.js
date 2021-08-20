import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";


const FoodCart = ({
  title,
  imgUrl,
  type,
  deliveryReview,
  price,
  time,
  discount,
  rating,
  distance,
  location,
  dinnerType
}) => {
  return (
    <FoodCartContainer>
      <a href="#" style={{display: 'flex', flexDirection: "column"}}>
        <Zoom>
          <ImageContainer>
            <img src={imgUrl} alt={title} />
            <p>{discount && discount}% OFF</p>
          </ImageContainer>
        </Zoom>
        <Info>
          <h3>{title}</h3>
          <div className="rating">
            <div className="star rating">
              <i
                class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
                size="18"
                color="#E23744"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E23744"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="rbbb40-0 ZGPg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                  ></path>
                </svg>
              </i>
              <i
                class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
                size="18"
                color="#E23744"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E23744"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="rbbb40-0 ZGPg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                  ></path>
                </svg>
              </i>
              <i
                class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
                size="18"
                color="#E23744"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E23744"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="rbbb40-0 ZGPg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                  ></path>
                </svg>
              </i>
              <i
                class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
                size="18"
                color="#E23744"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E23744"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="rbbb40-0 ZGPg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                  ></path>
                </svg>
              </i>
              <i
                class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
                size="18"
                color="#E23744"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#E23744"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="rbbb40-0 ZGPg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                  ></path>
                </svg>
              </i>
            </div>
            <span
              style={{
                fontWeight: "600",
                fontSize: "16px",
                color: "rgb(54, 54, 54)",
              }}
            >
              {rating}
            </span>
            <span style={{ color: "rgb(156, 156, 156)", fontSize: "16px" }}>
              ({deliveryReview} Delivery Reviews)
            </span>
          </div>
          <p className="type">{type}</p>
          {location && (
            <div className="location">
              <span>{distance}Km</span> · <span>{location}</span>
            </div>
          )}
          <div className="bottom">
            <span className="price">₹{price} for {dinnerType==="Delivery"? "one" : "two"}</span> {dinnerType==="Delivery" || ( 
                <>
                  · <span className="time">{time} min</span>
                </>
            )}
          </div>
        </Info>
      </a>
    </FoodCartContainer>
  );
};

export default FoodCart;

const FoodCartContainer = styled.div``;

const ImageContainer = styled.div`
  width: 100%;
  height: 248px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 12px rgba(0 0 0 / 8%);
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    widht: max-content;
    padding: 5px 10px;
    background: rgb(39, 129, 231);
    color: #fff;
    bottom: 18px;
    left: 0;
  }
`;

const Info = styled.div`
  margin-top: 10px !important;
  flex-grow: 1;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  .rating {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .type,
  .price,
  .time {
    color: rgb(156, 156, 156);
    font-size: 18px;
    margin-top: 5px;
    text-transform: capitalize;
  }
  .bottom,.location {
    margin-top: 10px;
    font-size: 18px;
  }
  .price,
  .time {
    text-transform: none;
  }
  .location{
      display: flex;
      color: rgb(156, 156, 156);
      gap: 5px;
  }
`;