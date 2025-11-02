import React from 'react'
import {Link, Links} from 'react-router-dom'

const Team = () => {
  return (
     <div className='container'>
    <div className='row pt-5 border-top'>
      <h1 className='text-center fs-2 text-muted'>People</h1>
    </div>
    <div className='row p-3  mb-5 text-muted'>
      <div className='col-6 p-5 text-center'>
        <img src="media/images/nithinKamath.jpg" alt="" style={{borderRadius:"100%",width: "50%"}}/>

        <h4 className='mt-4'>Nithin Kamath</h4>
        <h6 className='mt-3'>Founder, CEO</h6>

      </div>
      <div className='col-6 p-3 mt-5'>
        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        <p>Playing basketball is his zen.</p>
        <p >Connect on <Link to={""} style={{textDecoration:"none"}}> Homepage </Link>/ <Link style={{textDecoration:"none"}}> TradingQnA </Link>/<Link style={{textDecoration:"none"}}> Twitter </Link></p>
      </div>
      
    </div>
   </div>
  )
}

export default Team