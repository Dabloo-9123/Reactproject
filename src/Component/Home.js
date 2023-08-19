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
    
  //   <div className="home-super-parent">
  //   <Header></Header>
  //   <div className="home-first-card-containeer">
  //     <div className="left-side">
  //       {data
  //         .filter((item) => item.id === 99)
  //         .map((data) => {
  //           return (
  //             <>
  //               {
  //                 <NavLink to={`/${data.id}`} className={"home1"} >


  //                   <img
  //                     src={data.image}
  //                     alt="not found"
  //                     className={"left-card1"}
  //                   />
  //                 </NavLink>
  //               }
  //             </>
  //           );
  //         })}
  //     </div>
  //     <div className="right-side">
  //       {data
  //         .filter((item) => item.id === 59)
  //         .map((data) => {
  //           return (
  //             <>
  //               {
  //                 <NavLink to={`/${data.id}`} className={"home1"} >
  //                   <img
  //                     src={data.image}
  //                     alt="not found"
  //                     className={"left-card2"}
  //                   />
  //                 </NavLink>
  //               }
  //             </>
  //           );
  //         })}
  //       {data
  //         .filter((item) => item.id === 11)
  //         .map((data) => {
  //           return (
  //             <>
  //               {
  //                 <NavLink to={`/${data.id}`} className={"home1"} >
  //                   <img
  //                     src={data.image}
  //                     alt="not found"
  //                     className={"left-card3"}
  //                   />
  //                 </NavLink>
  //               }
  //             </>
  //           );
  //         })}
  //     </div>
  //   </div>

  //   <div>
  //     <h3 className="sub-title">The Latest</h3>
  //     <hr className="sub-heading-hr" />
  //     <div className="the-latest-parent">
  //       <div className="latest-one">
  //         {data
  //           .filter((item) => item.id === 1)
  //           .map((data) => {
  //             return (
  //               <>
  //                 {
  //                   <NavLink to={`/${data.id}`} className={"home1"} >
  //                     <img
  //                       src={data.image}
  //                       alt="not found"
  //                       className={"latest-card1"}
  //                     />

  //                     <h3>{data.heading}</h3>
  //                     <h5>{data.description.slice(0, 150)}...</h5>
                     
  //                   </NavLink>
  //                 }
  //               </>
  //             );
  //           })}
  //       </div>
  //       <div className="latest-one">
  //         {data
  //           .filter((item) => item.id === 43)
  //           .map((data) => {
  //             return (
  //               <>
  //                 {
  //                   <NavLink to={`/${data.id}`} className={"home1"} >
  //                     <img
  //                       src={data.image}
  //                       alt="not found"
  //                       className={"latest-card1"}
  //                     />
  //                     {/* <br/> */}
  //                     <h3>{data.heading}</h3>
  //                     <h5>{data.description.slice(0, 150)}...</h5>
                     
  //                   </NavLink>
  //                 }
  //               </>
  //             );
  //           })}
  //       </div>
  //       <div className="latest-one">
  //         {data
  //           .filter((item) => item.id === 99)
  //           .map((data) => {
  //             return (
  //               <>
  //                 {
  //                   <NavLink to={`/${data.id}`} className={"home1"} >
  //                     <img
  //                       src={data.image}
  //                       alt="not found"
  //                       className={"latest-card1"}
  //                     />
  //                     {/* <br/> */}
  //                     <h3>{data.heading}</h3>
  //                     <h5>{data.description.slice(0, 150)}...</h5>
                      
  //                   </NavLink>
  //                 }
  //               </>
  //             );
  //           })}
  //       </div>
  //     </div>

  //     <h3 className="sub-title">Latest Articles</h3>
  //     <hr className="sub-heading-hr" />
  //     <div className="latest-Articles">
  //       <div className="latest-Articles-parent">
  //         <div className="articles-one">
  //           <hr className="Articles-hr" />

  //           {data
  //             .filter((item) => item.id === 22)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {

  //                     <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
  //                       <div>
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"latest-card1"}
  //                         />
  //                       </div>
  //                       <div className="article-image-details">
  //                         <h3>{data.heading}</h3>
  //                         <h5>{data.description.slice(0, 150)}...</h5>
                          
  //                       </div>

  //                     </NavLink>
  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>
  //         <div className="articles-one">
  //           <hr className="Articles-hr" />

  //           {data
  //             .filter((item) => item.id === 99)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {
  //                     <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
  //                       <div>
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"latest-card1"}
  //                         />
  //                       </div>
  //                       <div className="article-image-details">
  //                         <h3>{data.heading}</h3>
  //                         <h5>{data.description.slice(0, 150)}...</h5>
                          
  //                       </div>
  //                     </NavLink>
  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>
  //         <div className="articles-one">
  //           <hr className="Articles-hr" />

  //           {data
  //             .filter((item) => item.id === 8)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {
  //                     <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
  //                       <div>
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"latest-card1"}
  //                         />
  //                       </div>
  //                       <div className="article-image-details">
  //                         <h3>{data.heading}</h3>
  //                         <h5>{data.description.slice(0, 150)}...</h5>
                          
  //                       </div>
  //                     </NavLink>
  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>
  //         <div className="articles-one">
  //           <hr className="Articles-hr" />

  //           {data
  //             .filter((item) => item.id === 44)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {
  //                     <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
  //                       <div>
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"latest-card1"}
  //                         />
  //                       </div>
  //                       <div className="article-image-details">
  //                         <h3>{data.heading}</h3>
  //                         <h5>{data.description.slice(0, 150)}...</h5>
                          
  //                       </div>
  //                     </NavLink>
  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>
  //       </div>

  //       <div className="advatige1">
  //         <h2 className="advatige-text">advertistment</h2>
  //       </div>
  //     </div>
  //     <div className="top-post">
  //       <div className="top-post-parent">
  //         <div className="top-post-image-one">
  //           {data
  //             .filter((item) => item.id === 65)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {
  //                     <div className="top-post-image1">
  //                       <NavLink to={`/${data.id}`} className={"home1 "} >
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"top-post-card1"}
  //                         />
  //                       </NavLink>
  //                     </div>
  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>
  //       </div>

  //       <div className="top-post-details-parent ">
  //         <h3 className="sub-title top-post-titlehome">Top Post</h3>
  //         <hr className="sub-heading-hr top-post-hr" />
  //         <div className="top-post-con">
  //           <div className="top-post-one-data">

  //             {data
  //               .filter((item) => item.id === 10)
  //               .map((data) => {

  //                 return (
  //                   <>
  //                     {

  //                       <NavLink to={`/${data.id}`} className={"home1 "} >
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"top-post-card2"}
  //                         />
  //                         <div>
  //                           <div className="top-post-data1">
  //                             <div>
  //                               {" "}
  //                               <h3>{data.heading}</h3>
                                
  //                             </div>
  //                             <div>
  //                               <span className="top-post-count">1</span>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </NavLink>
  //                     }
  //                   </>
  //                 );
  //               })}
  //           </div>
  //         </div>
  //         <hr className="top-post-divider top-post-divider2" />

  //         <div className="latest-one">
  //           {data
  //             .filter((item) => item.id === 79)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {

  //                     <NavLink to={`/${data.id}`} className={"home1 top-posrt-sub-con1 top-posrt-sub-con2"} >
  //                       <div>
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"top-post-sub1-card1"}
  //                         />
  //                       </div>
  //                       <div>
  //                         <h5>{data.heading}</h5>

                          
  //                       </div>
  //                       <div>
  //                         <span className="top-post-count">2</span>{" "}
  //                       </div>
  //                     </NavLink>

  //                   }
  //                 </>
  //               );
  //             })}


  //         </div>
  //         <hr className="top-post-divider3" />
  //         <div className="latest-one top-post3">
  //           {data
  //             .filter((item) => item.id === 90)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {

  //                     <NavLink to={`/${data.id}`} className={"home1 top-posrt-sub-con1 top-posrt-sub-con2"} >
  //                       <div>
  //                         <img
  //                           src={data.image}
  //                           alt="not found"
  //                           className={"top-post-sub1-card1"}
  //                         />
  //                       </div>
  //                       <div>
  //                         <h5>{data.heading}</h5>

                         
  //                       </div>
  //                       <div>
  //                         <span className="top-post-count">3</span>{" "}
  //                       </div>
  //                     </NavLink>

  //                   }
  //                 </>
  //               );
  //             })}


  //         </div>


  //       </div>


  //     </div>
  //     <div className="latest-story-details-parent">

  //       <h3 className="sub-title top-post-titlehome1">Latest Stories</h3>
  //       <hr className="sub-heading-hr top-post-hr" />
  //       <hr className="latest-stories-divider" />
  //       <div className="the-latest-parent the-Stories-parent">
  //         <div className="latest-one story1">
  //           {data
  //             .filter((item) => item.id === 18)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {
  //                     <NavLink to={`/${data.id}`} className={"home1 "} >


  //                       <h3>{data.heading}</h3>
  //                       <h5>{data.description.slice(0, 150)}...</h5>
                        
  //                       <hr className="hrNone"></hr>
  //                     </NavLink>
  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>
  //         <div className="latest-one story1 ">
  //           {data
  //             .filter((item) => item.id === 19)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {
  //                     <NavLink to={`/${data.id}`} className={"home1 "} >

  //                       {/* <br/> */}
  //                       <h3>{data.heading}</h3>
  //                       <h5>{data.description.slice(0, 150)}...</h5>
                       

  //                     </NavLink>

  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>

  //         <div className="latest-one story1">

  //           {data
  //             .filter((item) => item.id === 20)
  //             .map((data) => {
  //               return (
  //                 <>
  //                   {
  //                     <NavLink to={`/${data.id}`} className={"home1 "} >

  //                       {/* <br/> */}
  //                       <h3>{data.heading}</h3>
  //                       <h5>{data.description.slice(0, 150)}...</h5>
                        
  //                     </NavLink>
  //                   }
  //                 </>
  //               );
  //             })}
  //         </div>
  //       </div>
  //       <hr className="latest-stories-divider latest-stories-divider-last" />
  //     </div>
  //   </div>
  //   <diV className="hFooter">
  //     <Footer />

  //   </diV>
  //   </div>
  // )
  
  )
}

export default Home