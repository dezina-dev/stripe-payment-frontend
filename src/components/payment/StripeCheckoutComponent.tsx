import React, {useState, useEffect} from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loadStripe} from '@stripe/stripe-js';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';
import cream from "../../assets/cream.avif"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51N0jPYSJOrr4lnodNmMtedNQTujbU3cGDzUy7EYXtUOLgtwtgZc4MjXdNZ3ghtysP7qBnJsrIGVGiZnC985XSUXM00btfYbzxA");

function StripeCheckoutComponent() {

      const [paydetails, setPaydetails] = 
      useState<{[key: string]: any}>({});
      
        useEffect(() => {
            setPaydetails({
            product_name: "ponds cream",
            price: 500*100,  // have to multiply with 100 as it considers last 2 digits as paise
            quantity: 1
          });
        }, []);

  const handleClick = async () => {
    // Get Stripe.js instance
    const stripe:any = await stripePromise;

    const response = await axios
      .post("http://localhost:5000/payments/create-checkout-session", paydetails)
      .then((response) => {
        console.log(response.data.data.id);
         // When the customer clicks on the button, redirect them to Checkout.
        const result = stripe.redirectToCheckout({

            sessionId: response.data.data.id,
        });

        console.log("result", result)
        if (result.error) {
            console.log("result.error", result.error)
            toast.error(result.error.message, { position: "top-right" });
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          }

      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } 
      });

  };

  return (
    <div style={{ margin: "5%" }}>
      <img
        style={{ width: "20%", border: "1px gray solid" }}
        src={cream} alt="product image"/>
      <h4>You have selected Ponds cream</h4>
      <h4>Amount: 500 (INR)</h4>
      <p>Once click on pay, you will be redirected to our Payment gateway.</p>
      <button role="link" onClick={handleClick} 
      style={{cursor: "pointer", backgroundColor: "#2980B9", width: "180px", height: "40px", 
      borderRadius: "20px", fontSize: "16px"}}>
        {" "}
        Click here to Pay
      </button>
    </div>
  );
}

export default StripeCheckoutComponent;