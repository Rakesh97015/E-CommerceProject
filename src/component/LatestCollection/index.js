

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/Shopcontext";
import Title from '../Title/index'
import ProductItem from "../ProductItem";
import './index.css'

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, SetLatestProducts] = useState([]);
 



  useEffect(() => {
    SetLatestProducts(products.slice(0, 10));
  }, [products]);

 
  return (
    <div className="my-10 w-full px-4">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the latest trends in our newest collection.
        </p>
      </div>
      
      {/* Product Grid */}
      <div className="row mt-3 g-3">
  {LatestProducts.map((item) => (
    <div key={item._id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
    </div>
  ))}
</div>



    </div>
  );
};

export default LatestCollection;



