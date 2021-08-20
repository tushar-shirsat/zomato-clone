const functions = require("firebase-functions");

const express = require('express');
const app = express();
const cors = require('cors');

const stripe = require('stripe')('sk_test_51IEsztHzOWX1kVt1RiMbVjhJOEQy0kUENjrWS8iaTKuyp6u7qwEALCUjZgwNLVVE2tIs9qMZP64Xqoojg4mwpO4J00j9foAVJk');

app.use(cors({origin: true}));

app.use(express.json());

app.post('/payments/create',async (req,res) =>{
    const total = req.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    });
    res.status(201).send({
        clinetSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-e20f9/us-central1/api