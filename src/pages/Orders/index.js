// import React, { useContext } from 'react'
// import { ShopContext } from '../../context/Shopcontext'
// import Title from '../../component/Title'
// import './index.css'

// const Orders = () => {
//   const {products,currency}=useContext(ShopContext)
//   return (
//     <div className='border-t pt-16'>
//          <div className='text-2xl m-5'>
//           <Title  text1={'MY'} text2={'ORDERS'}/>
//          </div>
//          <div>
//          {
//           products.slice(1,4).map((item,index)=>( 
//           <div  key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md-items-center md-justify-between gap-4'>
//                  <div className='flex items-start gap-6 text-sm order-image-container'>
//                       <img className='orders-image' src={item.image[0]}/>
//                  </div>
//                  <div className="cart-item-details d-flex">
//                 <p className="cart-item-name">{item.name}</p>
//                 <p className="cart-item-price">{currency} {item.price}</p>
//                 <p className="cart-item-size">Size: {item.size}</p>
//               </div>

//             </div>
//             ) ) 
//          }
//          </div>
//     </div>
//   )
// }

// export default Orders


import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import Title from '../../component/Title';
import './index.css';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl m-5'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div className='border border-black m-4 p-4 rounded-md'>
        {products.slice(1, 4).map((item, index) => (
          <div key={index}>
            <div className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-center gap-6 text-sm order-image-container'>
                <img className='orders-image' src={item.image[0]} alt={item.name} />
                <div className='cart-item-details'>
                  <p className='cart-item-name'>{item.name}</p>
                  <p className='cart-item-price'>{currency} {item.price}</p>
                  <p className='cart-item-size'>Size: {item.size}</p>
                  <p className='purchase-order'>Purchased Date: <span className='text-gray-400'>28, Feb, 2025</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex-justify-between'>
              <div className='status-container'>
  <span className='status-indicator'></span>
  <p className='text-sm'>Ready To Ship</p>
</div>

              </div>
            </div>
            <hr className='border-t border-gray-300 my-4' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
