import React from 'react'

const Hero = () => {
  return (
    <section className='container-fluid ' id='supportHero'> 
      <div className='p-5' id='supportWrapper'>
        <h4>Support portal</h4>
        <a href="">Track ticket</a>
      </div>
      <div className='row p-3 m-5'>
        <div className='col-6 p-5'>
          <h1  className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
          <input type="text"  id='supportInput' placeholder='EG. how do i activate F&O'/> <br/>
          <a href=""> Track account opening </a> 
          <a href=""> Track segment activation </a>
          <a href="">Intraday margins </a>
          <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className='col-6 p-5 '>
          <h1 className='fs-3 mb-5'>Featured</h1>
          <span className=''>1. <a href="" className=''> Current takeovers and delistings - january 2024</a></span><br/>
          <span>2. <a href=""> Latest intrady leverages -MIS & CO </a></span>
        </div>
      </div>
    </section>
  )
}

export default Hero