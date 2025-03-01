import React, { useState } from 'react';
import Title from '../../component/Title';
import CartTotal from '../../component/CartTotal';
import { assets } from '../../assets/assets';
import './index.css';
import { useNavigate } from "react-router-dom";


const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  console.log("Selected Payment Method:", method);
  const navigate = useNavigate();

  function orders() {
   navigate("/orders");
 }
  return (
    <div className="container">
      <div className="div-container">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

            <div className="flex gap-3">
               <input className="inputcss " type="text" placeholder="First Name" />
               <input className="inputcss" type="text" placeholder="Last Name" />
            </div>

            <input type="email" className="input-field" placeholder="Email" />
            <input type="text" className="input-field" placeholder="Street" />

            <div className="flex gap-3">
               <input className="inputcss" type="text" placeholder="City" />
               <input className="inputcss" type="text" placeholder="State" />
            </div>

            <div className="flex gap-3">
               <input className="inputcss" type="number" placeholder="Zipcode" />
               <input className="inputcss" type="text" placeholder="Country" />
            </div>

            <input className="input-field" type="number" placeholder="Phone" />
            </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />

          {/* PAYMENT SELECTION */}
          <div className="flex flex-col lg:flex-row gap-2 payment-container">
                              <div className="flex flex-col lg:flex-row gap-2 payment-container">
                     {/* Stripe Payment Option */}
                     <label className="payment-option border p-2 cursor-pointer flex items-center">
                        <input
                           type="radio"
                           name="payment"
                           value="stripe"
                           checked={method === "stripe"}
                           onChange={() => setMethod("stripe")}
                           className="hidden"
                        />
                        <div className={` ${method === "stripe" ? "bg-green-400" : ""}`}></div>
                        <img className="h-4 mx-2" src={assets.stripe_logo} alt="Stripe" />
                     </label>

                     {/* Razorpay Payment Option */}
                     <label className="payment-option border p-2 cursor-pointer flex items-center">
                        <input
                           type="radio"
                           name="payment"
                           value="razorpay"
                           checked={method === "razorpay"}
                           onChange={() => setMethod("razorpay")}
                           className="hidden"
                        />
                        <div className={` ${method === "razorpay" ? "bg-green-400" : ""}`}></div>
                        <img className="h-4 mx-2" src={assets.razorpay_logo} alt="Razorpay" />
                     </label>

                     {/* Cash on Delivery Option */}
                     <label className="payment-option border p-2 cursor-pointer flex items-center">
                        <input
                           type="radio"
                           name="payment"
                           value="cod"
                           checked={method === "cod"}
                           onChange={() => setMethod("cod")}
                           className="hidden"
                        />
                        <div className={` ${method === "cod" ? "bg-green-400" : ""}`}></div>
                        <p className="text-gray-500 text-xs font-medium mx-2">CASH ON DELIVERY</p>
                     </label>
                     </div>

<div className='w-full text-end mt-8'>
         <button onClick={orders}className='bg-black  text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PlaceOrder;
