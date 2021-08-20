import React from 'react';
import styled from 'styled-components';
import HomeSlider from './HomeSlider';

const Delivery = () => {
    const data = [
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png',
            name: "Pizza"
        },
    ]
    return (
        <DeliverySection>
            <HomeSlider 
                data={data}
                title="Inspiration for your first order"
                Height='190px'
                Width="100%"
                bg='rgb(248, 248, 248)'
                text="left"
                show={4}
            />
        </DeliverySection>
    )
}

export default Delivery;

const DeliverySection = styled.div`

`;