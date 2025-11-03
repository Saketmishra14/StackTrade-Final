import React from 'react'

const Hero = () => {
  return (
    <div className=' container'>
      <div className='row text-center mt-5'> 
        <h1 className='mt-5 mb-3 fs-3'>Charges</h1>
        <p className='mb-5 text-muted fs-5'>List of all charges and taxes</p>
        <div className='col-4 mt-5 mb-5'>
          <img src="media/images/pricing0.svg" alt="" style={{width:"60%"}}/>
          <h1 className='fs-4'>Free equity delivery</h1>
          <p className='text-muted fs-6 mt-4'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 mt-5 mb-5'>
          <img src="media/images/pricing20.svg" alt="" style={{width:"60%"}}/>
          <h1 className='fs-4'>Intraday and F&O trades</h1>
          <p className='text-muted fs-6 mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 mt-5 mb-5'>
          <img src="media/images/pricing0.svg" alt="" style={{width:"60%"}}/>
          <h1 className='fs-4'>Free direct MF</h1>
          <p className='text-muted fs-6 mb-5 mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero