import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 text-center border-top'>
        <div className='col-8 p-4'>
          <a style={{textDecoration:"none"}}><h2 className='fs-5'>Brokerage calculator</h2> </a> 

          <ul style={{textAlign:"left",lineHeight:"2",fontSize:"16px"}} className='text-muted'> 
           <li> Interest: 0.04% per day(₹  40 per lakh) on the funded amount. </li>
           <li> The interest is applied from T+1 day until the stocks are sold.</li>
            <li> Brokerage: 0.3% or ₹ 20, whichever is lower per executed order.</li>
            <li> Pledge and unpledge charges: ₹ 15 + GST per ISIN per pledge request, and ₹ 15 + GST per unpledge request.</li>
            <li> If you buy the same stock multiple times using MTF, pledge and unpledge charges apply to each separate transaction.</li>
            <li>  Square-off charges: ₹  50 + GST per order squared off by Zerodha.</li>
            </ul>  
           </div>
        <div className='col-4 p-4'>
          <a style={{textDecoration:"none"}}><h2 className='fs-5'>List of charges</h2></a>
        </div>   
        </div>
    </div>
    
  )
}

export default Brokerage