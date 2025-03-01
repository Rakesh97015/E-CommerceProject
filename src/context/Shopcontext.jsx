
import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select product size", { autoClose: 500 }); // Reduced duration
      return;
    }

    setCartItems((prevCart) => {
      const cartData = structuredClone(prevCart);

      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }

      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
      return cartData;
    });
  };

  const getCartCount = () => {
    let totalCount = 0;
    Object.values(cartItems).forEach((sizes) => {
      Object.values(sizes).forEach((quantity) => {
        totalCount += quantity;
      });
    });
    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prevCart) => {
      const cartData = structuredClone(prevCart);
      if (cartData[itemId] && cartData[itemId][size] !== undefined) {
        cartData[itemId][size] = quantity;
      }
      return cartData;
    });
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    Object.entries(cartItems).forEach(([itemId, sizes]) => {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        Object.entries(sizes).forEach(([size, quantity]) => {
          totalAmount += itemInfo.price * quantity;
        });
      }
    });
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
      <ToastContainer autoClose={500} position="top-center" hideProgressBar />
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
