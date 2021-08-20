import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styled from "styled-components";
import { selectCart, selectTotal } from "../features/cart/cartSlice";
import {useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const OrderFooter = () => {
  const cart = useSelector(selectCart);
  const total = useSelector(selectTotal);
    return (
        <OrderItemContainer className={cart.length>0? "show":"hide"}>
        <OrderItems>
          <OrderItemsLeft>
            <div>
              <ArrowDropDownIcon className="icon"/>
            </div>
            <Heading>Your Order ({cart.length})</Heading>
          </OrderItemsLeft>
          <OrderItemsRight>
            <Heading>Subtotal: ₹{total}</Heading>
            <button><NavLink to="/payment" style={{color: '#fff'}}>Continue</NavLink></button>
          </OrderItemsRight>
        </OrderItems>
      </OrderItemContainer>

    )
}

export default OrderFooter;

const OrderItems = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

const OrderItemContainer = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0;
  box-shadow: rgb(125 125 125 / 20%) 0px 2px 8px;
  transition: transform 250ms ease-in-out;
  &.hide{
    transform: translateY(100%);
  }
  &.show{
    transform: translateY(0%);
  }
`;

const OrderItemsLeft = styled.div`
    display: flex;
    align-items:center;
    div{
        padding: 2px;
        cursor: pointer;
        margin-right: 20px;
        border: 1px solid rgb(207, 207, 207);
        .icon{
            font-size: 30px;
            border-radius: 5px;
        }
    }
`;

const OrderItemsRight = styled.div`
    display: flex;
    align-items:center;

    button{
        padding: 10px 20px;
        margin-left: 20px;
        font-size: 18px;
        background-color: rgb(237, 90, 107);
        border: 1px solid rgb(237, 90, 107);
        color: #fff;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
        transition: background-color 250ms ease;
        &:hover{
            background-color: rgb(236, 70, 84);
        }
    }
`;

const Heading = styled.h3`
    font-weight: 500;
    font-size: 20px;
`;
