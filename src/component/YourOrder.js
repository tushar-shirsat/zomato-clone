import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { selectUserEmail } from '../features/user/userSlice';
import { db } from '../firebase';
import moment from 'moment';
import PaymentCard from './PaymentCard';

const YourOrder = () => {
    const {orderId} = useParams();
    const email = useSelector(selectUserEmail)
    const [order,setOrder] = useState([]);

    useEffect(() =>{
        db
        .collection('user')
        .doc('tusharshirsat01@gmail.com')
        .collection('orders')
        .doc(orderId)
        .onSnapshot((snapshot) =>{
            if(snapshot.data()){
                setOrder(snapshot.data());
            }
        })
    },[])
    console.log(order.cart);
    return (
        <Container>
            <div className="detail">
                <h3>Order Id</h3>
                <p>{orderId}</p>
            </div>
            <div className="detail">
                <h3>Date</h3>
                <p>{moment.unix(order.created).format('MMMM Do YYYY, h:mma')}</p>
            </div>
            <div className="detail">
                <h3>Delivery Address</h3>
                <p>bhagyalami residency, Smc EWS Twp, Bhestan</p>
            </div>

            <YourContainer>
                <h3>Your Order</h3>
                <OrderItem>
                    {
                        order?.cart?.map(item => <PaymentCard id={item?.id} title={item?.title} price={item?.price} qty={item?.qty} orderId={orderId} />)
                    }
                </OrderItem>
            </YourContainer>
            <Total>
                <h3>Total :</h3>
                <p>₹ {order?.amount}</p>
            </Total>
        </Container>
    )
}

export default YourOrder


const Container = styled.section`
    max-width: 1100px;
    margin:0 auto;
    width: 100%;
    margin-top : 30px;

    .detail {
        margin-bottom: 15px;
        h3{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        p{
            font-size: 16px;
            font-weigth: 500;
        }
    }
`;

const YourContainer = styled.div`

`;

const OrderItem = styled.div`
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(156,156,156);
`;

const Total = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 15px;
    h3,p{
        font-size: 18px;
        font-weight: bold;
    }
    p{
        font-weight: 500;
    }
`;