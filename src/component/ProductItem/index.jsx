import React,{useContext} from 'react'
import { ShopContext } from '../../context/Shopcontext'
import './index.css'
import { Link } from 'react-router-dom'


const ProductItem = ({id,image,name,price}) => {

    const {currency}= useContext(ShopContext)

    return (
    <Link  to={`/product/${id}`}>
      <div className="text-gray-700 cursor-pointer ">
      <img className='hover:scale-110 transition ease-in-out height' src={image[0]}  alt=""/>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </div>
    </Link>
  )
}

export default ProductItem




