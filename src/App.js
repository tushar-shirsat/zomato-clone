import React from 'react';
import './App.css';
import Header from './component/Header';
import Food from './component/Food'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import HomeHero from './component/HomeHero';
import Delivery from './component/Delivery';
import Spotlight from './component/Spotlight';
import Restaurants from './component/Restaurants';
import NutritionSlider from './component/NutritionSlider';
import Nutrition from './component/Nutrition';
import Order from './component/Order';
import Payment from './component/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { setUserLogin } from './features/user/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';
import YourOrder from './component/YourOrder'

const promise = loadStripe('pk_test_51IEsztHzOWX1kVt1sPDn6UX1DU3SZCFhK77dREsLm2aiQRdLaiKmmehl4Nh3CAqiMHOiHS1qbiyb3Q2q3FHeahes000kYpFSTl');

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged(async user=>{
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
      }
    })
  },[])
  return (
    <div className="App">  
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomeHero/>
            <Delivery/>
            <Spotlight/>
            <Food/>
          </Route>
          <Route path="/dine-out">
            <HomeHero/>
            <Restaurants/>
          </Route>
          <Route path="/nutrition">
            <HomeHero/>
            <NutritionSlider/>
            <Nutrition/>
          </Route>
          <Route path="/order/:type/:id">
            <HomeHero/>
            <Order/>
          </Route>
          <Route path="/payment">
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
          </Route>
          <Route path="/yourorder/:orderId">
            <YourOrder/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
