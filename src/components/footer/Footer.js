import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#42275a'
          fillOpacity='1'
          d='M0,32L60,48C120,64,240,96,360,128C480,160,600,192,720,176C840,160,960,96,1080,58.7C1200,21,1320,11,1380,5.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </svg>
      <div className='footer'>
        <div className='address'>
            <h1>Address</h1>
            <p>Maliekal House</p>
            <p>Thrissur Dist</p>
            <p>Kerala</p>
        </div>
        <div className='contactus'>
            <h1>Contact</h1>
            <p>monusimonm@gmail.com</p>
            <p>+91 9497371911</p>
        </div>
      </div>
    </>
  )
}

export default Footer
