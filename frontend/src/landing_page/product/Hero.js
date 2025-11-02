import React from 'react'
import {Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container'>
      <div className='row text-center mt-5 pt-5'> 
        <h1 className='fs-3 mb-3'>Zerodha Products</h1>
        <p className='mb-3 fs-5 text-muted'>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our <Link style={{textDecoration:"none"}}> investment offerings →</Link></p>

      </div>
    </div>
  )
}

export default Hero