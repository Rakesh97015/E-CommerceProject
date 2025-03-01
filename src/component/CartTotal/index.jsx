

import React, { useContext } from "react";
import { ShopContext } from "../../context/Shopcontext";
import Title from "../Title";
import "./index.css";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-page">
  

      {/* Horizontal Line */}
      <hr className="cart-divider" />

      {/* Right Side: Cart Totals */}
      <div className="cart-summary">
        <div className="summary-box">
          <div className="text-2xl">
            <Title text1={"CART"} text2={"TOTALS"} />
          </div>

          <div className="summary-details">
            <div className="summary-row">
              <p>Subtotal</p>
              <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="summary-row">
              <p>Shipping Fee</p>
              <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className="summary-row total">
              <b>Total</b>
              <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartTotal;
