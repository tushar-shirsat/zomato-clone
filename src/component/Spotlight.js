import React from 'react'
import styled from 'styled-components'
import HomeSlider from './HomeSlider'

const Spotlight = () => {
    const data = [
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
        {
            imgUrl: 'https://b.zmtcdn.com/data/brand_creatives/logos/92d6c4e2d6bc6a33a8a8bae9ed4abc64_1597120604.png?output-format=webp',
            name: "29 min"
        },
    ]
    return (
        <SpotLight>
            <HomeSlider
                data={data}
                title="Top brands in spotlight"
                Height="150px"
                Width="150px"
                show={6}
                bg="#fff"
                text="center"
            />
        </SpotLight>
    )
}

export default Spotlight


const SpotLight = styled.div`

`;