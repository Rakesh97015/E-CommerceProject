import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import './index.css';
import Title from '../Title';
import ProductItem from '../ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);

useEffect(() => {
  const bestProduct = products.filter((item) => item.bestseller);
  console.log(bestProduct); // Check if the products are being filtered
  setBestSeller(bestProduct.slice(0, 5));
}, [products]);


  return (
    <div className="my-10 w-full px-4">
      <div className="text-center text-3xl py-8">
        <Title className="d-flex flex-column align-items-center" text1="BEST" text2="SELLERS" />
        <p className="W-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          BestSellers Page
        </p>
      </div>
      <div className="row mt-3 g-3">
        {bestseller
        .map((item) => (
          <div key={item._id} className=' col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
          <ProductItem  id={item._id} name={item.name} image={item.image} price={item.price} />

          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
