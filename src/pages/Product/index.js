import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast for notifications
import { ShopContext } from "../../context/Shopcontext";
import "./index.css";
import { assets } from "../../assets/assets";
import RelatedProducts from "../../component/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]); // Default first image
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      setError("Please select a size before adding to cart.");
      setTimeout(() => toast.error("⚠️ Please select a product size."), 0); // Delay ensures rendering
      return;
    }
    addToCart(productData._id, size);
    setError(""); // Clear error on success
    toast.success("✅ Added to cart!");
  };
  

  if (!productData) {
    return <div className="loading">Loading product...</div>;
  }

  return (
    <div>
      <div className="product-container">
        {/* Left - Image Gallery */}
        <div className="image-gallery">
          {productData.image.map((item, index) => (
            <img
              key={index}
              src={item}
              className={`product-thumbnail ${image === item ? "active" : ""}`}
              alt={`Thumbnail ${index}`}
              onClick={() => setImage(item)}
            />
          ))}
        </div>

        {/* Center - Large Product Image */}
        <div className="main-image">
          <img src={image} className="product-main-image" alt="Selected Product" />
        </div>

        {/* Right - Product Details */}
        <div className="product-details">
          <h2 className="product-title">{productData.name}</h2>
          <div className=" d-flex rating">
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_icon} alt="star" />
            <img src={assets.star_dull_icon} alt="star" />
            <p className="review-count">(122)</p>
          </div>
          <p className="product-price">{currency}{productData.price}</p>
          <p className="product-description">{productData.description}</p>

          {/* Size Selector */}
          {productData.sizes && productData.sizes.length > 0 && (
            <div className="size-selector">
              <h4>Select Size</h4>
              <div className="size-options flex gap-2">
                {productData.sizes.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSize(item);
                      setError(""); // Clear error on size selection
                    }}
                    className={`border-2 px-4 py-2 rounded-lg transition duration-200
                      ${
                        size === item
                          ? "bg-black text-white border-orange-500"
                          : "bg-white text-black border-gray-300"
                      } 
                      hover:border-orange-500 focus:outline-none`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`add-to-cart ${!size ? "disabled-btn" : ""}`}
            disabled={!size} // Disable button when no size is selected
          >
            ADD TO CART
          </button>
          <hr className="divider" />

          {/* Product Info */}
          <div className="product-info">
            <p>✅ 100% Original product.</p>
            <p>🚚 Cash on delivery available.</p>
            <p>🔄 Easy return & exchange within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product Description & Reviews */}
      <div className="mt-20">
        <div className="d-flex gap-3 justify-content-start">
          <p className="border px-5 py-3 text-sm ms-5">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-muted ecommerce-container">
          <p>
            An E-Commerce website is an online platform that allows businesses
            and individuals to buy and sell products or services over the
            internet. It functions as a digital storefront, providing users
            with product listings, shopping cart functionality, payment
            processing, and order management.
          </p>
          <p>
            Products are the core of any eCommerce website, representing the
            items or services available for purchase. They can be physical
            goods, digital products, or services, depending on the business
            model.
          </p>
        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
