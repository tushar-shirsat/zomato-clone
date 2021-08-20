import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import FoodCart from './FoodCart'
import {db} from '../firebase'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Restaurants = () => {
    const [food,setFood] = useState([]);
    useEffect(() =>{
        db
         .collection("dine-out")
         .onSnapshot(snapshot =>{
            setFood(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
         })
    },[])
    return (
        <RestaurantsContainer>
            <h1>Dine-Out Restaurants in Surat</h1>
            <CartContainer>
                {
                    food?.map(item =>{
                        const {data}  = item;
                        const {title,imgUrl,type,deliveryReview,price,rating,distance,location,dinnerType} = data;
                        return(
                            <NavLink to={`/order/dine-out/${item.id}`} key={item.id}>
                                <FoodCart
                                    title={title}
                                    imgUrl={imgUrl}
                                    type = {type}
                                    deliveryReview={deliveryReview}
                                    price = {price}
                                    rating = {rating}
                                    distance= {distance}
                                    location={location}
                                    dinnerType={dinnerType}
                                    id = {item.id}
                                />
                            </NavLink>
                        )
                    })
                }
            </CartContainer>
        </RestaurantsContainer>
    )
}

export default Restaurants

const RestaurantsContainer = styled.section`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

    h1{
        font-size: 30px;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

const CartContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
`;