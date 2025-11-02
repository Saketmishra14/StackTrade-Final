import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className='text-center mt-5 p-5'>
          <h1 className='fs-4 mb-4'>404 Not Found</h1>
          <p className='text-muted'>Sorry, the page you looking for does not exist.</p>
         <Link to={"/"}> <button type="button" class="btn btn-primary fw-5 fs-5  mt-4" style={{width:"18%",margin:"0 auto",}}>Go Home</button></Link>

        </div>
      </div>
    </div>
    )
}

export default NotFound