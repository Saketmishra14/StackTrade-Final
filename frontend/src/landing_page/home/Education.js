import React from 'react'

const Education = () => {
  return (
    <div className="container mt-5">
      <div className='row'>
        <div className='col-6 mt-5'>
          <img src="media/images/education.svg" alt="education logo"/>

        </div>
        <div className='col-6 mt-5'>
          <h2 className='mb-4 fs-2'>Free and open market education</h2>
          <p>Varsity, the largest online stock market education book in the world <br/> covering everything from the basics to advanced trading.</p>
          <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

          <p className='mt-4'>TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
          <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
      </div>
    </div>
  )
}

export default Education