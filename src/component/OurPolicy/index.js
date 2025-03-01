import React from 'react'
import { assets } from '../../assets/assets'

const OurPolicy = () => {
  return (
    <div class="container py-5">
    <div class="row text-center">
      <div class="col-12 col-sm-4 mb-4">
        <img src={assets.exchange_icon} class="w-25 mb-3 mx-auto" alt="Exchange Policy"/>
        <p class="font-weight-bold">Easy Exchange Policy</p>
        <p class="text-muted">We offer a hassle-free exchange policy</p>
      </div>
      
      <div class="col-12 col-sm-4 mb-4">
        <img src={assets.quality_icon} class="w-25 mb-3 mx-auto" alt="Quality Policy"/>
        <p class="font-weight-bold">7 Days Return Policy</p>
        <p class="text-muted">We provide a 7-day free return policy</p>
      </div>
      
      <div class="col-12 col-sm-4 mb-4">
        <img src={assets.support_img} class="w-25 mb-3 mx-auto" alt="Support"/>
        <p class="font-weight-bold">Best Customer Support</p>
        <p class="text-muted">We provide 24/7 customer support</p>
      </div>
    </div>
  </div>)
}

export default OurPolicy
