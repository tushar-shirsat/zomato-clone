import React from "react";
import styled from "styled-components";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OrderProduct from "./OrderProduct";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../firebase";
import OrderFooter from "./OrderFooter";

const Order = () => {
  const [food,setFood] = useState([]);
  const {type,id} = useParams();
  useEffect(() =>{
    db
      .collection(type)
      .doc(id)
      .onSnapshot(snapshot =>{
          setFood(snapshot.data())
      })
  },[])
  return (
    <Container>
      <ImageContainer>
        <img
          src={food?.imgUrl}
          alt={food?.title}
        />
      </ImageContainer>
      <Wrap>
        <LeftWrap>
          <h2>{food?.title}</h2>
          <p>{food?.type}</p>
          <p style={{color: "rgb(105, 105, 105"}}>Surat</p>
        </LeftWrap>
        <RightWrap>
          <div className="starContainer">
            <div className="star">
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
            <p>3.6</p>
          </div>
        </RightWrap>
      </Wrap>
      <h3>Order Online</h3>
      <DeliveryWrap>
        <div className="left">
            <CheckCircleIcon className="icon"/>
            <p>Delivery to: <span style={{fontWeight: "500"}}>Surat</span></p>
        </div>
        <div className="right">
            <span style={{fontSize: '16px',color: "#fff", cursor: "pointer"}}>CHANGE</span>
        </div>
      </DeliveryWrap>
      <h2>Recommended</h2>
      <OrderProduct mainFood={food.mainFood}/>
      <h2>{food.extraFood && "Extra Food"}</h2>
     <OrderProduct mainFood={food?.extraFood} />
     <OrderFooter/>
    </Container>
  );
};

export default Order;

const Container = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;

  &>h3{
      margin: 20px 0;
      cursor: pointer;
      font-size: 20px;
      color: rgb(237, 90, 107);
      padding: 10px 20px;
      border-bottom: 2px solid rgb(237, 90, 107);
      width: max-content;
  }

  h2{
      font-size: 18px;
      font-weight: 500;
      margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  height: 370px;
  width: 100%;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 250ms ease;
  }
  &:hover img{
      transform: scale(1.09);
  }
`;

const LeftWrap = styled.div`
  h2{
      font-size: 30px;
      font-weight: 500;
      text-transform: capitalize;
      margin-top : 10px;
  }
  p{
      margin-top : 10px;
      font-size: 18px;
  }
`;

const RightWrap = styled.div`
  .starContainer{
      display: flex;
      align-items: center;
      gap: 10px;

      .star{
          display: flex;
          align-items: center;
          gap: 5px;
      }

      p{
          font-size: 20px;
          font-weight: 500;
      }
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;
`;

const DeliveryWrap = styled.div`
  background-color: rgb(39, 129, 231);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 12px rgb(0 0 0 / 8%);
  .left{
      display: flex;
      align-items: center;
      gap: 10px;

      .icon{
          font-size: 20px !important;
          color: #fff !important;
      }

      p{
          font-size: 16px;
          color: #fff;
      }
  }
`;

const ProductWrap = styled.div`

`;