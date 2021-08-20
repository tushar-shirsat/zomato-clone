import React,{useState,useEffect} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import axios from './axios'
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../features/user/userSlice';
import { selectCart } from '../features/cart/cartSlice';
import { useHistory } from 'react-router-dom';

const StripePayment = ({total}) => {
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    const email = useSelector(selectUserEmail);
    const cart = useSelector(selectCart);
    const history = useHistory();

    useEffect(() =>{
        const getClientSecret = async () =>{ 
            const response = await axios({
                method: 'POST',
                url: `/payments/create?total=${total * 100}`
            });
            setClientSecret(response.data.clinetSecret);
        }
        getClientSecret();
    },[total])

    const handleSubmit =async (e) =>{
        e.preventDefault();

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            db
              .collection('user')
              .doc(email)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                cart: cart,
                amount: paymentIntent.amount/100,
                created: paymentIntent.created
              })
              history.replace(`/yourorder/${paymentIntent.id}`);
        })
    }
    return (
        <Form  onSubmit={handleSubmit}>
            <CardElement className="StripElement"/>
            <button className="payment" style={{display: "none"}}>submit</button>
        </Form>
    )
}

export default StripePayment
const Form= styled.form`
    .StripElement{
        width: 100%;
    }
`;