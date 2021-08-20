import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setIncQty,
  setDecQty,
  setRemoveCart,
  setTotal,
  selectCart,
} from "../features/cart/cartSlice";

const PaymentCard = ({ id, title, price, qty,orderId }) => {
  const [count, setCount] = useState(qty);
  const cart = useSelector(selectCart)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setTotal(cart));
  })
  const handleDecreaseClick = () => {
    if (count > 0) {
      setCount(count - 1);
      dispatch(setDecQty({ id, qty: count }));
    }

    if (count <= 1) {
      dispatch(setRemoveCart());
    }
  };

  const handleIncreaseClick = () => {
    setCount(count + 1);
    dispatch(setIncQty({ id, qty: count }));
  };
  return (
    <Container>
      <RightWrap>
        <div className="logo">
          <span></span>
        </div>
        <div className="item-detail">
          <h5>{title}</h5>
          <p>{orderId && <span>{qty} X</span>} ₹ {+price}</p>
        </div>
      </RightWrap>
      <LeftWrap>
        {
          orderId===false && (
          <div
            style={{
              width: "60px",
              display: "flex",
              padding: "5px 0",
              alingItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              border: "1px solid rgb(232, 232, 232)",
              color: 'rgb(237, 90, 107)',
              cursor: 'pointer'
            }}
          >
            <span
              style={{ width: "33.33%" }}
              onClick={() => handleDecreaseClick(id)}
            >
              -
            </span>
            <span style={{ width: "33.33%" }}>{count}</span>
            <span
              style={{ width: "33.33%" }}
              onClick={() => handleIncreaseClick(id)}
            >
              +
            </span>
          </div>
          )
        }
        <p>₹ {+price*qty}</p>
      </LeftWrap>
    </Container>
  );
};

export default PaymentCard;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
`;

const RightWrap = styled.div`
display: flex;
align-items: flex-start;
gap: 10px;
.logo {
    width: 15px;
    height: 15px;
    display: grid;
    place-items: center;
    border: 1px solid rgb(80, 181, 71);

    span {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: rgb(80, 181, 71);
    }
  }

  .item-detail{
      h5{
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
      }
      p{
          font-size: 16px;
          font-weight: 400;
      }
  }
`;

const LeftWrap = styled.div`
&>div{
  margin-bottom: 10px;
}
 p{
     font-size: 16px;
     font-weight: 500;
 }
  
`;
