import React from 'react'
import styled from 'styled-components';
import OrderCard from './OrderCard';

const OrderProduct = ({mainFood}) => {
    return (
        <ProductWrap>
            {
                mainFood?.map(food =>{
                    const {id,title,imgUrl,price,special,star,vote,description} = food;
                    return (
                        <OrderCard
                            key={id}
                            id = {id}
                            title={title}
                            imgUrl={imgUrl}
                            price={price}
                            special={special}
                            star={star}
                            vote={vote}
                            description={description}
                        />
                     )
                })
            }
        </ProductWrap>
    )
}

export default OrderProduct;

const ProductWrap = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(156, 156, 156);
`;

