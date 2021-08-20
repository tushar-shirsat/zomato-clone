import React from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PaymentCard from './PaymentCard';
import { useSelector } from 'react-redux';
import { selectCart, selectTotal } from '../features/cart/cartSlice';
import StripePayment from './StripePayment';


const Payment = () => {
    const cart = useSelector(selectCart);
    const total = useSelector(selectTotal);

    const handleOrder = () =>{
        document.querySelector(".payment").click();
    }

    return (
        <>
        <h2 style={{maxWidth: '1100px',margin:'0 auto',fontSize: '30px',fontWeight: '500',marginTop: '20px'}}>Checkout</h2>
        <PaymentContainer>

            <LeftWrap>
                <UserName>
                    <h3>Tushar (tushar01@gmail.com)</h3>
                    <p>You are securely logged in</p>
                </UserName>

                <Address>
                    <h3>Delivery Address</h3>
                    <div className="address">
                        <div>
                            <CheckCircleIcon style={{fontSize: "30px",fill: "rgb(39, 129, 231)"}}/>
                            <span style={{fontSize: '18px',fontWeight: "bold"}}>HOME</span>
                            <span style={{fontSize: "16px",color: "rgb(156, 156, 156)"}}>bhagyalami residency, Smc EWS Twp, Bhestan</span>
                        </div>
                        <p>CHANGE</p>
                    </div>
                </Address>

                <PaymentMethod>
                    <h3> Payment Method</h3>
                    <StripePayment total={total}/>
                </PaymentMethod>
            </LeftWrap>

            <RightWrap>
                <h2>Summary</h2>

                <OrderItems>
                    <h3>Order</h3>
                    {
                        cart?.map((item) => <PaymentCard key={item?.id} title={item?.title} price={item?.price} qty={item?.qty} id={item?.id} />)
                    }
                    <h3>Grand Total: ₹{total}</h3>
                </OrderItems>
                <button onClick={handleOrder}>
                    <span>Place Order</span>
                    <span><ArrowDropDownIcon className="icon" style={{fontSize: '30px', transform: 'rotate(-90deg)',transition: "all 250ms ease-in"}}/></span>
                </button>
            </RightWrap>
        </PaymentContainer>
        </>
    )
}

export default Payment

const PaymentContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
`;

const LeftWrap = styled.section`
    width: 60%;
`;

const RightWrap = styled.section`
    width: 40%;
    position: relative;
    h2{
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    button{
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 10px;
        padding: 10px;
        font-size: 20px;
        background: rgb(237, 90, 107);
        border: 1px solid rgb(237, 90, 107);
        margin-top: 10px;
        width: 100%;
        text-align: center;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            span{
                .icon{
                    transform: translateX(50%) rotate(-90deg) !important;
                }
            }
        }
    }
`;

const UserName = styled.div`
    padding: 20px 30px;
    border: 1px solid rgb(232, 232, 232);
    border-radius: 10px;
    margin-bottom: 20px;
    h3{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    p{
        font-size: 16px;
        color: rgb(156, 156, 156);
    }
`;

const Address = styled(UserName)`

    .address{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        div{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        p{
            color: rgb(237, 90, 107);
            font-weight: bold;
            cursor: pointer;
        }
    }
`;

const PaymentMethod = styled(UserName)`

`;

const OrderItems = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgb(232, 232, 232);

    h3{
        font-weight: 500;
        font-size: 20px;
        padding: 20px;
        background: rgb(248,248,248);
    }
    
`;