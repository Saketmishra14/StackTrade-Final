import React from 'react'

const LeftImage = ({
  IMGurl,
  ProductDescription,
  ProductTitle,
  TryDemo,
  LearnMore,
  GooglePlay,
  appStore
}) => {
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-6 mt-5 p-5 '>
          <img src={IMGurl} alt=""/>
        </div>
        <div className='col-6 mt-5 p-5 ' >
          <h1 className='fs-3 mt-5 mb-4'>{ProductTitle}</h1>

          <p className='fs-6'>{ProductDescription}</p>
          <div className='mt-4 mb-4 '>
         <a href={TryDemo} style={{textDecoration:"none"}}> Try demo <i class="fa-solid fa-arrow-right"></i></a>
         <a href={LearnMore} style={{textDecoration:"none" ,marginLeft:"60px"}}> Learn more <i class="fa-solid fa-arrow-right"></i></a>
         </div>
        <div>
         <a href={GooglePlay}><img src="media/images/googlePlayBadge.svg" alt=""/></a>
         <a href={appStore} style={{marginLeft:"20px"}}><img src="media/images/appstoreBadge.svg" alt=""/></a>
         </div>
          
        </div>
      </div>
    </div>
  )
}

export default LeftImage