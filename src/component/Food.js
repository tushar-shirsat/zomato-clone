import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import FoodCart from './FoodCart';
import { db } from '../firebase';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Food = () => {
    const [food, setFood] = useState([]);
    useEffect(() =>{
        db
          .collection('delivery')
          .onSnapshot(snapshot =>{
            setFood(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
          })
    },[])
    return (
        <>
        <Container>
            <h1 style={{marginBottom: '30px',fontSize: "30px",fontWeight: "500"}}>Delivery Restaurants in Surat</h1>
            <FoodContainer>
                {
                    food?.map(item =>{
                        const {id,data} = item
                        return(
                            <NavLink to={`/order/delivery/${id}`} key={id}>
                            <FoodCart
                                title={data?.title}
                                imgUrl={data?.imgUrl}
                                type = {data?.type}
                                deliveryReview={data?.deliveryReview}
                                price = {data?.price}
                                time = {data?.time}
                                discount = {data?.discount}
                                rating = {data?.rating}
                                dinnerType= {data?.dinnerType}
                            />
                            </NavLink>
                        );
                    })
                }
            </FoodContainer>
        </Container>
        </>
    )
}

export default Food;
const Container = styled.section`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
`;
const FoodContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
`;
