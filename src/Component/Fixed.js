import React from 'react'
import './innerpage.css'
import clapping from "../logo/clapping.jpg"
import share from "../logo/share.jpg"


function Fixed() {
  return (
    <>
    <div className='fixed-parent'>
      <div className='fixed-sub'>
      <div className='fixed-img bg' style={{backgroundImage:`url(${clapping})`}}>
  
  </div>
    <div  className='fixed-text'>4.9M</div>
      </div>
      <div className='fixed-sub'>
      <div className='fixed-img bg' style={{backgroundImage:`url(${share})`}}>
  
  </div>
      <div className='fixed-text'>share this article</div>
      </div>
    </div>
    </>
  )
}

export default Fixed