import React from 'react'
import { Link } from 'react-router-dom'

function Linkcompo() {
  return (
    <>
<button className='toggle'>X</button>

    <div className='navbar'>
        <Link to='/' className='link1'>Home</Link>
        <Link to='/bollywood' className='link1'>Bollywood</Link>
        <Link to='/hollywood' className='link1'>Hollywood</Link>
        <Link to='/fitness' className='link1'>Fitness</Link>
        <Link to='/technology' className='link1'>Technology</Link>
        <Link to='/food' className='link1'>Food</Link>
        
    </div>
    </>
  )
}

export default Linkcompo