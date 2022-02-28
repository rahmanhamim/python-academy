import { Box, Typography } from "@mui/material";
import {
 CardCvcElement,
 CardExpiryElement,
 CardNumberElement,
 useElements,
 useStripe,
} from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
 const ELEMENT_OPTIONS = {
  style: {
   base: {
    fontSize: "18px",
    color: "#424770",
    letterSpacing: "0.025em",
    "::placeholder": {
     color: "#aab7c4",
    },
   },
   invalid: {
    color: "#9e2146",
   },
  },
 };

 const stripe = useStripe();
 const elements = useElements();

 const handleSubmit = async (e) => {
  if (!stripe || !elements) {
   return;
  }
  e.preventDefault();
 };

 return (
  <Box
   sx={{
    background: "#fff",
    marginTop: "5em",
    borderRadius: "10px",
    padding: "3em",
   }}
  >
   <Typography variant="h4" sx={{ fontWeight: "bold", color: "#10375C" }}>
    Payment Method
   </Typography>
   <form onSubmit={handleSubmit}>
    <label
     style={{ marginTop: "1.2em", display: "block" }}
     htmlFor="cardNumber"
    >
     Card Number
    </label>
    <Box
     sx={{
      background: "#FFFFFF",
      border: "1px solid #CCCCCC ",
      p: 2,
      borderRadius: "6px",
     }}
    >
     <CardNumberElement
      style={{ border: "1px solid #333" }}
      id="cardNumber"
      options={ELEMENT_OPTIONS}
     />
    </Box>
    <label style={{ marginTop: "1.2em", display: "block" }} htmlFor="expiry">
     Expiration
    </label>
    <Box
     sx={{
      background: "#FFFFFF",
      border: "1px solid #CCCCCC ",
      p: 2,
      borderRadius: "6px",
     }}
    >
     <CardExpiryElement
      style={{ width: "100%" }}
      id="expiry"
      options={ELEMENT_OPTIONS}
     />{" "}
    </Box>
    <label style={{ marginTop: "1.2em", display: "block" }} htmlFor="cvc">
     CVC
    </label>
    <Box
     sx={{
      background: "#FFFFFF",
      border: "1px solid #CCCCCC ",
      p: 2,
      borderRadius: "6px",
     }}
    >
     <CardCvcElement id="cvc" options={ELEMENT_OPTIONS} />
    </Box>
    <button
     style={{
      background: "#FF4958",
      color: "#fff",
      padding: "1em 2em",
      border: "1px solid #FF4958",
      borderRadius: "3px",
      fontFamily: "Manrope",
      cursor: "pointer",
      marginTop: "2em",
     }}
     type="submit"
     disabled={!stripe}
    >
     Place Order
    </button>
   </form>
  </Box>
 );
};

export default CheckoutForm;
