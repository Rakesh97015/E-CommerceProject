import React from 'react'
import './index.css'
import Hero from '../../component/Hero'
import LatestCollection from '../../component/LatestCollection'
import BestSeller from '../../component/BestSeller'
import OurPolicy from '../../component/OurPolicy'
import NewsletterBox from '../../component/NewsletterBox'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home