const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Q1 Calculate the total price of items in the cart
app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  const cartTotalPrice = newItemPrice + cartTotal;

  res.send(cartTotalPrice.toString());
});

// Q2 Apply a discount based on membership status
app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember === 'true';

  let result;
  if (isMember) {
    result = cartTotal - cartTotal * (10 / 100);
  } else {
    result = cartTotal;
  }

  res.send(result.toString());
});

// Q3 Calculate tax on the cart total
app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = cartTotal * (5 / 100);
  res.send(result.toString());
});

// Q4 Estimate delivery time based on shipping method
app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);

  let estimatedDelivery;
  if (shippingMethod !== 'express') {
    estimatedDelivery = distance / 50;
  } else {
    estimatedDelivery = distance / 100;
  }

  res.send(estimatedDelivery.toString());
});

// Q5 calculate the shipping cost based on weight and distance

app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distnace = parseFloat(req.query.distance);
  let shippingCost = weight * distnace * 0.1;
  res.send(shippingCost.toString());
});

// Q6 Calculate the loyalty points earned from a purchase

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * 2;
  res.send(loyaltyPoints.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
