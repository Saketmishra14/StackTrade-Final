import React from 'react'

const CreateTicket = () => {
  return (
    <div className='container'>
      <div className='row'> 
        <h1 className='mt-5 mb-5 fs-3'>To create a ticket, select a relevant topic</h1>
        <div className='col-4 mt-5 mb-5'>
          <h2 className='fs-5 p-4'><i class="fa-solid bg-black fa-plus"></i>&nbsp;<span>Account Opening</span></h2>
          <ul>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Resident individual</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Minor</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Company, Partnership, HUF and LLP</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Glossary</a>
          </ul>
               
        </div>
        <div className='col-4 mt-5 mb-5'>
          <h2 className='fs-5 p-4'><i class="fa-regular fa-circle-user"></i>&nbsp;<span>Your Zerodha Account</span></h2>
          <ul>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Account modification</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Nomination</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Transfer and conversion of securities</a>
          </ul>
        </div>
        <div className='col-4 mt-5 mb-5'>
          <h2 className='fs-5 p-4'><i class="fa-solid fa-chart-simple"></i>&nbsp; <span>Kite</span></h2>
          <ul>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Charts and orders</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Alerts and Nudges</a>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> General</a>
          </ul>
        </div>
        <div className='col-4'>
          <h2 className='fs-5 p-4'><i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;<span>Funds</span></h2>
          <ul>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Add Money</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Withdraw money</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Add bank accounts</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> eMandates</a><br/>
          </ul>
               
        </div>
        <div className='col-4'>
          <h2 className='fs-5 p-4'><i class="fa-regular fa-circle"></i>&nbsp;<span>Console</span></h2>
          <ul>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate action</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Report</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Profile</a>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Segments</a>
          </ul>
        </div>
        <div className='col-4'>
          <h2 className='fs-5 p-4'><i class="fa-solid fa-coins"></i>&nbsp; <span>Coin</span></h2>
          <ul>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Mutual funds</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br/>
            <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}>Fixed Deposit (FD)</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Features on Coin</a><br/>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> Payments and Orders</a>
           <a href='' style={{textDecoration:"none",lineHeight:"2.5"}}> General</a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket