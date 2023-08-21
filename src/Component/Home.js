import React, { useContext } from 'react'
import { info } from '../App';
import { NavLink } from 'react-router-dom';
import './style.css'
import './home.css'
import Footer from './Footer';
import Header from './header';

function Home() {
    const data=useContext(info)
    // console.log(data);
  return (
  <>
  <Header></Header>
  <div className="home_top_main">

<div className="home_top_left">
    {
    data.filter((item)=>item.id===60).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                    <img src={data.image} alt="not found"></img>    
                </NavLink>
            }
            
            </>
        )
    })
}
</div>
<div className="home_top_right">
  <div className="home_top_right1">
  {
    data.filter((item)=>item.id===65).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
            <img src={data.image} alt="not found"></img>

                </NavLink>
            }
            </>
        )
    })
}
  </div>
  <div className="home_top_right2">
  {
    data.filter((item)=>item.id===61).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
            <img src={data.image} alt="not found"></img>

                </NavLink>
            }
            </>
        )
    })
}
  </div>

    
</div>
</div>

<h2  className="home_latest_head">The Latest</h2>
<div className="home_latest">
<div className="home_latest1">

{
    data.filter((item)=>item.id===40).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                <img src={data.image} alt="not found"></img>
                <h3>{data.heading}</h3>
               <p>{data.description}</p>
                </NavLink>
            }
           
            </>
        )
    })
}
</div>
<div className="home_latest1">
{
    data.filter((item)=>item.id===99).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
            <img src={data.image} alt="not found"></img>
            <h3>{data.heading}</h3>
            <p>{data.description}</p>
                </NavLink>
            }
            
            </>
        )
    })
}
</div>
<div className="home_latest1">
{
    data.filter((item)=>item.id===69).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                     <img src={data.image} alt="not found"></img>
            <h3>{data.heading}</h3>
            <p>{data.description}</p>
                </NavLink>
            }
           
            </>
        )
    })
}
</div>

</div>
<h2 className="home_latest_head1">Latest Artical</h2>
<div className="latest_artical">
   <div className="latest_artical_left">
   {
    data.filter((item)=>item.id>68 && item.id<73).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                     <div className="latest_left1">
        <div className="view">
            <img  src={data.image} alt="not found"></img>
        </div>
        <div className="latest_left_content">
            <h3>{data.heading}</h3>
            <p>{data.description}</p>
        </div>
    </div>
    <hr></hr>

                </NavLink>
            }
            
            </>
        )
    })
}
   {/* <div className='loadmore'>Load more ↓</div> */}
   <div className='the-latest-loadmore-bottom'>
   {
    data.filter((item)=>item.id===55).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                     <img src={data.image} alt="not found"></img>
            {/* <h3>{data.heading}</h3>
            <p>{data.description}</p> */}
                </NavLink>
            }
           
            </>
        )
    })
}
   </div>
     
   </div >
   <div className='latest_artical_parent'>
   <div className="latest_artical_right">Avertisement</div>
   <div className='top-post-main'>
    <div className='top-post1st-big'>
        <h3>Top Post</h3>
        {
    data.filter((item)=>item.id===89).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                     <img src={data.image} alt="not found"></img>
            <h3>{data.heading}</h3>
            {/* <p>{data.description}</p> */}
                </NavLink>
            }
           
            </>
        )
    })
}
    </div>
    <div className='top-post2nd-smalls'>
        
        {
    data.filter((item)=>item.id===79).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                    <div className='top-post-small-first'>
                    <img src={data.image} alt="not found"></img>
            <h3>{data.heading}</h3>
                    </div>
                    
            {/* <p>{data.description}</p> */}
                </NavLink>
            }
           
            </>
        )
    })
}
        
        {
    data.filter((item)=>item.id===69).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
        <div className='top-post-small-first'>
        <img src={data.image} alt="not found"></img>
            <h3>{data.heading}</h3>
        </div>

                   
            {/* <p>{data.description}</p> */}
                </NavLink>
            }
           
            </>
        )
    })
}
       
        {
    data.filter((item)=>item.id===59).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                     <div className='top-post-small-first'>
                     <img src={data.image} alt="not found"></img>
            <h3>{data.heading}</h3>
                     </div>
                    
            {/* <p>{data.description}</p> */}
                </NavLink>
            }
           
            </>
        )
    })
}
       
    </div>
   </div>
   </div>
</div>
 
 <h2 className='latest_story_header'>Latest Stories</h2>
 <div className='latest_story_parent'>
   
    {
    data.filter((item)=>item.id>40 && item.id<44).map((data)=>{
        return(
            <>
            {
                <NavLink to={`/${data.id}`} className={"nav_link"} >
                     <div className='latest_story_child'>
            {/* <img src={data.image} alt="not found"></img> */}
            <h3>{data.heading}</h3>
            <p>{data.description}</p>
            </div>
                </NavLink>
            }
            
            </>
        )
    })
}
   
 </div>
 <div className='viewmore'>    </div>
 <div className='footer-mine'>
      <Footer></Footer>
 </div>
  </>
    
  
  )
}

export default Home