import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/Shopcontext";
import Title from "../../component/Title";
import "./index.css";
import { assets } from "../../assets/assets";
import CartTotal from "../../component/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Transform cartItems into an array of cartData for rendering
    const tempData = Object.entries(cartItems).flatMap(([productId, sizes]) =>
      Object.entries(sizes)
        .filter(([, quantity]) => quantity > 0)
        .map(([size, quantity]) => ({
          _id: productId,
          size,
          quantity,
        }))
    );
    setCartData(tempData);
  }, [cartItems]);

  function handleNavPlaceOrd() {
    navigate("/place-order");
  }

  return (
    <div className="cart-container">
      {/* Cart Title */}
      <div className="cart-title">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          if (!productData) return null;

          return (
            <div key={index} className="cart-item">
              {/* Product Image */}
              <div className="cart-image-container">
                <img className="cart-image" src={productData.image?.[0] || ""} alt={productData.name || "Product"} />
              </div>

              {/* Product Info */}
              <div className="cart-item-details">
                <p className="cart-item-name">{productData.name}</p>
                <p className="cart-item-price">{currency} {productData.price}</p>
                <p className="cart-item-size">Size: {item.size}</p>
              </div>

              {/* Quantity Input */}
              <input
                className="cart-quantity-input"
                type="number"
                min="1"
                defaultValue={item.quantity}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value > 0) updateQuantity(item._id, item.size, value);
                }}
              />

              {/* Delete Icon */}
              <img
                className="cart-delete-icon"
                src={assets.bin_icon}
                alt="Delete"
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>

      {/* Cart Summary & Checkout */}
      <div className="cart-summary-container">
        <CartTotal />
        <button className="checkout-button" onClick={handleNavPlaceOrd}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
