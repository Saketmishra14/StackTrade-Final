import React from 'react'

const Universe = () => {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h1 className='mt-5 mb-4 fs-4'>The Zerodha Universe</h1>
        <p className='mt-3 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

        <div className='col-4 p-3 mt-4 mb-4'>
          <img src="media/images/ZerodhaFundhouse.png" style={{width:"50%"}} alt=""/>
          <p className='text-muted text-small fs-6 mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className='col-4 mt-4 p-3'>
          <img src="media/images/sensibullLogo.svg" style={{width:"50%"}} alt=""/>
          <p className='text-muted text-small mt-3'>
Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p></div>
        <div className='col-4 mt-4 p-3'>
          <img src="media/images/tijori.svg" style={{width:"40%"}} alt=""/>
          <p className='text-muted text-small '>Investment research platform that offers detailed insights,stocks, sectors, supply chains, and more.</p>
        </div>
        <div className='col-4 p-3'>
          <img src="media/images/streakLogo.png" style={{width:"45%"}} alt=""/>
          <p className='text-muted text-small mt-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className='col-4 p-3'>
          <img src="media/images/smallcaseLogo.png"style={{width:"55%"}} alt=""/>
          <p className='text-muted text-small mt-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className='col-4 p-3'>
          <img src="media/images/dittoLogo.png" style={{width:"35%"}} alt=""/>
          <p className='text-muted text-small mt-3'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
                <button type="button" class="btn btn-primary fw-6 fs-5 mt-5 mb-5" style={{width:"20%",margin:"0 auto",}}>Sign up for free</button>

      </div>
    </div>
  )
}

export default Universe