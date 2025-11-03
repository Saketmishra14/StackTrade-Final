import React from 'react'

const RightImage = ({
   IMGurl,
  ProductDescription,
  ProductTitle,
  TryDemo,
  LearnMore,
  
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 mt-5 p-5'>
          <h1 className='fs-3 mt-5 mb-4'>{ProductTitle}</h1>
          <p className='fs-6'>{ProductDescription}</p>
          <div className='mt-4 mb-4 '>
         <a href={LearnMore} style={{textDecoration:"none" }}> Learn more <i class="fa-solid fa-arrow-right"></i></a>
         </div>
        </div>
        <div className='col-2'></div>
        <div className='col-6' >
           <img src={IMGurl} alt=""/>
        </div>
      </div>
    </div>

    )
}

export default RightImage