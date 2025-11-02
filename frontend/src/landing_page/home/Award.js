import React from 'react'

const Award = () => {
  return (
  <div class="container">
    <div class="row">
      <div className='col-6 mt-3 p-5'>
        <img src="media/images/largestBroker.svg" alt="Award" />

      </div>
      <div className='col-6 mt-5 p-5'>
        <h1>Largest Stock broker in India</h1>
        <p className='mb-5'>1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

        <div className="row">
          <div className='col-6 '>
            <ul>
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
          </div>
          <div className='col-6'>
            <ul>
              <li>Stock & IPOs</li>
              <li>Direct mutual funds</li>
              <li><p>Bonds and government security</p></li>
            </ul>
          </div>
        </div >
        <img src="media\Images\pressLogos.png" alt="Press Logo" style={{width:"90%"}}/>

      </div>


    </div>
  </div>
    
  )
}

export default Award