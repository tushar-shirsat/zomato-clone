import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCart, setIncQty,setDecQty,setRemoveCart, selectCart, setTotal } from "../features/cart/cartSlice";



const OrderCard = ({ title, imgUrl, price, vote, special, description,id }) => {
  const [add, setAdd] = useState(false);
  const [count,setCount] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  useEffect(()=>{
    dispatch(setTotal(cart));
  })
  const handleADDClick = () =>{
    setAdd(true);
    setCount(1);
    dispatch(setCart({title,imgUrl,price,vote,special,description,id,qty:1}))
  }
  
  const handleDecreaseClick = () =>{
    if(count > 0){
      setCount(count - 1);
      dispatch(setDecQty({id,qty: count}));
    }
    
    if(count <= 1){
      setAdd(false);
      dispatch(setRemoveCart(id));
    }
  }

  const handleIncreaseClick = (id) =>{
    setCount(count + 1);
    dispatch(setIncQty({id,qty: count}));
  }
  return (
    <OrderCardContainer>
      <PrdouctWrapLeft>
        <ImageContainer>
          <img src={imgUrl} alt={title} />
        </ImageContainer>
        <InfoContainer>
          <h4>{title}</h4>
          {special && (
              <span
              style={{
                background: "rgb(83, 156, 238)",
                padding: "5px",
                color: "#fff",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
            {special}
          </span>
          )}
          <p className="rating">
            <span>⭐ ⭐ ⭐ ⭐</span> <span>{vote} votes</span>
          </p>
          <p className="price">₹{price}</p>
          <p className="description">{description}</p>
        </InfoContainer>
      </PrdouctWrapLeft>
      <PrdouctWrapRight>
        {
         add || (
            <div style={{padding: "10px 20px"}} onClick={() => handleADDClick()}>
            Add <span>+</span>
            </div>
         )
        }
        {
          add && (
          <div style={{width: '60px',display: 'flex',padding: "5px 0",alingItems: 'center', justifyContent: "space-between",textAlign:"center"}}>
            <span style={{width: '33.33%'}} onClick={() => handleDecreaseClick(id)}>-</span>
            <span style={{width: '33.33%'}}>{count}</span>
            <span style={{width: '33.33%'}} onClick={() => handleIncreaseClick(id)}>+</span>
          </div>
          )
        }
        
      </PrdouctWrapRight>
      
    </OrderCardContainer>
  );
};

export default OrderCard;

const OrderCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
`;

const PrdouctWrapLeft = styled(OrderCardContainer)`
  margin-top: 0;
`;

const PrdouctWrapRight = styled.div`
  display: flex;
  aling-items: center;
  jusify-content: center;
  border: 2px solid rgb(156, 156, 156);
  border-radius: 10px;
  cursor: pointer;
  transition: all 250ms linear;
  div {
    color: rgb(28, 28, 28);
    font-size: 16px;
    font-weight: 700;
    span {
      color: rgb(237, 90, 107);
    }
  }
`;

const ImageContainer = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 3px 12px rgb(0 0 0/ 8%);
  }
`;

const InfoContainer = styled.div`
  h4 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .rating {
    margin: 10px 0;
    span:not(:first-child) {
      font-size: 16px;
      color: rgb(156, 156, 156);
    }
  }
  .price {
    color: rgb(28, 28, 28);
    font-size: 16px;
  }
  .description {
    font-size: 16px;
    color: rgb(156, 156, 156);
    margin-top: 10px;
  }
`;



