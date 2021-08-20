import React from 'react'
import styled from 'styled-components'
import NutritionCard from './NutritionCard'

const Nutrition = () => {
    return (
        <Container>
            <h1 style={{marginBottom: '30px',fontSize: "30px",fontWeight: "500"}}>All Product</h1>
            <NutritionContainer>
                <NutritionCard
                    imgUrl="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                    title="Sleep - Timed Release Melatonin"
                    info="An advanced timed-release formula that helps you fall asleep faster and wake up feeling fresher."
                    price="150"
                    type="tablets"
                />
                <NutritionCard
                    imgUrl="https://dote.zmtcdn.com/prod/data/admin_assets/images/823/a8f5a76a18cbbabfcc2f2f0bd0abe823_1617346939.png?output-format=webp"
                    title="Sleep Sure"
                    info="Helps promote sound sleep naturally, reduces sleep onset time and provides relief from restlessness."
                    price="995"
                    type="tablets"
                />
                <NutritionCard
                    imgUrl="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
                    title="Burn - Weight Balance"
                    info="This formula with VFill™ technology will help improve metabolism and support fat burn."
                    price="250"
                    type="capsules"
                />
                <NutritionCard
                    imgUrl="https://dote.zmtcdn.com/prod/data/admin_assets/images/603/1fd10dddb432d60481c1178ffe9b7603_1617347002.png?output-format=webp"
                    title="Weight Well"
                    info="Herbal blend that helps regulate metabolism, fat accumulation, and assists in weight management naturally."
                    price="1445"
                    type="tablets"
                />
                <NutritionCard
                    imgUrl="https://dote.zmtcdn.com/prod/data/admin_assets/images/cce/08f50c0fd0f8409d128cd53c404f0cce_1614756605.png?output-format=webp"
                    title="Probiotic+"
                    info="An advanced 2-in-1 formula with benefits of both Probiotics and Prebiotics that helps improve digestion."
                    price="150"
                    type="capsules"
                />
                <NutritionCard
                    imgUrl="https://dote.zmtcdn.com/prod/data/admin_assets/images/cce/08f50c0fd0f8409d128cd53c404f0cce_1614756605.png?output-format=webp"
                    title="Liver - Milk Thistle Herb"
                    info="Give your liver the care it needs with this herbal formula that supports liver detoxification and repair."
                    price="150"
                    type="capsules"
                />
                
            </NutritionContainer>
        </Container>
    )
}

export default Nutrition

const Container = styled.section`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 30px;
`;

const NutritionContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`;

