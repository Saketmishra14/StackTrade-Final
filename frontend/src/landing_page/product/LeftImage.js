import React from 'react'
import {Link} from 'react-router-dom'

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
      <div className='row'>
        <div className='col-6'>
          <img src={IMGurl} alt=""/>
        </div>
        <div className='col-6'>
          <h1>{ProductTitle}</h1>

          <p>{ProductDescription}</p>
          <div>
         <a href={TryDemo} style={{textDecoration:"none"}}> Try demo <i class="fa-solid fa-arrow-right"></i></a>
         <a href={LearnMore} style={{textDecoration:"none"}}> Learn more <i class="fa-solid fa-arrow-right"></i></a>
         </div>
        <div>
         <a href={GooglePlay}><img src="media/images/googlePlayBadge.svg" alt=""/></a>
         <a href={appStore}><img src="media/images/appstoreBadge.svg" alt=""/></a>
         </div>
          
        </div>
      </div>
    </div>
  )
}

export default LeftImage