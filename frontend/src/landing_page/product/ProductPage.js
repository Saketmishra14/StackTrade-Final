import React from 'react'
import Hero from './Hero'
import LeftImage from './LeftImage'
import RightImage from './RightImage'
import Universe from './Universe'

const ProductPage = () => {
  return (
    <>
   
    <Hero/>
    <LeftImage 
  IMGurl="media/images/kite.png"
  ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  ProductTitle="Kite"
  TryDemo=""
  LearnMore=""
  GooglePlay=""
  appStore=""
/>
<RightImage  
  IMGurl="media/images/console.png"
  ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  ProductTitle="Console"
  TryDemo=""
  LearnMore=""
  />

    <LeftImage 
  IMGurl="media/images/coin.png"
  ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
  ProductTitle="Coin"
  TryDemo=""
  LearnMore=""
  GooglePlay=""
  appStore=""
/>
<RightImage  
  IMGurl="media/images/kiteconnect.png"
  ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  ProductTitle="Kite Connect API"
  TryDemo=""
  LearnMore=""
  />
    <LeftImage 
  IMGurl="media/images/varsity.png"
  ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
  ProductTitle="Varsity mobile"
  TryDemo=""
  LearnMore="Learn more"
  GooglePlay=""
  appStore=""
/>
 <p className='text-center fs-5 mt-5 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
    
    <Universe/>
   
    </>

)
}

export default ProductPage