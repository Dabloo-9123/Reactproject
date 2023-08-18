import React,{useState} from 'react'
import './style.css'
import menu from "../logo/menu.png"
import Close from "../logo/close.jpeg"
import Linkcompo from './Linkcompo';

function Header() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className='the'>
      <h1 className='siren'><div className='the1'>The</div><div className='siren1'> Siren</div></h1>
      <div className='humber' onClick={()=>{
       if (count % 2 === 0) {
        setCount(count + 1);
        console.log("before", count);

      } else {
        setCount(count - 1);

        console.log("after", count);
      }
      }} >
    
     {
       count === 0 ? <img src={Close} alt='not found' className='hummenu'/>:<img src={menu} alt='not found' className='hummenu'/>
     }
   
      
      </div>
    
        </div>
    
        {
      count === 0?<div className='header'><Linkcompo/></div>:""
    }
      <div className='headerweb'>
    
      <Linkcompo></Linkcompo>
      </div>
    
    </>
    
  )
}

export default Header