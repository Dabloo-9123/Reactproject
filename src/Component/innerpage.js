import React ,{useState}from 'react'
import { useContext } from "react";
// import Footer from './Footer';
import './innerpage.css'
import { NavLink, useNavigate } from "react-router-dom";
import {  info } from '../App';
import Fixed from './Fixed';
import SmallCard from './SmallCard';
import Writer from './Writer';
import clapping from "../logo/clapping.jpg";
import persion from "../logo/man.jpg";
import Header2 from './header2';
// import Header from './header';


function Innerpage() {
  const data=useContext(info)
  console.log(data);
  const navi = useNavigate();
  const url = window.location.href;
  const orUrl = url.split("/").pop();
  let url1 = Number(orUrl);
  const [orid, setid] = useState(url1);
  // const [min, setMin] = useState(1)
  let min1 = 1;
  console.log(orid);
  if (url1 < 7) {
    // setMin(1);
    min1 = 1;
  } else if (url1 > 6 && url1 < 13) {
    // setMin(6);
    min1 = 7;
  } else if (url1 > 13 && url1 < 23) {
    // setMin(11);
    min1 = 13;
  } else if (url1 > 22 && url1 < 29) {
    // setMin(21);
    min1 = 23;
  } else {
    // setMin(28);
    min1 = 30;
  }
  let max = min1 + 2;

  console.log("url", url1);
  function idHandler() {
      const url = window.location.href;
      const orUrl = url.split("/").pop();
      console.log("clicked");
      let url1 = Number(orUrl);
      setid(url1);
      navi(`/${url1}`)
  
    }
    function navigation() {
      navi("/");
    }
  return (
    <div>
      {/* <Header></Header> */}
      <Header2></Header2>
      <div className="details-parent">
         {data
           .filter((item) => item.id === url1)
           .map((data) => {
             return (
               <>
                 {
                   <div className="inner_main">
                     <h3 className="heading">{data.heading}</h3>
                     <SmallCard />
                     <div style={{ zIndex: 1 }} className="fixed-res">
                       <Fixed />
                     </div>
                    <img
                       src={data.image}
                       alt="not found"
                       className={"main_img"}
                     />

                     <p className="details-des">{data.description}...</p>
                     <div className="language">
                       <button className="bt-language">React</button>
                       <button className="bt-language">Javascript</button>
                    <button className="bt-language">Animation</button>
                     </div>
                     <div className="clap-counts">
                       <div className="fixed-sub">
                         <div
                           className="fixed-img bg"
                           style={{ backgroundImage: `url(${clapping})` }}
                         ></div>
                         <div className="fixed-text">5.9M</div>
                       </div>
                     </div>
                     <div className="writer-respo">
                       {" "}
                       <Writer />
                     </div>
                     {/* <button className="backWeb" onClick={() => {
                       navi(-1)
                     }}>Back</button> */}
                   </div>
                 }
               </>
             );
           })}
       </div>
      
       
      <br className="res-diveder"></br>
         <div className="more-serin" style={{ zIndex: 5 }}>
           <h3 className="more-heading ">More From The Siren</h3>

           <div className="more-parent">
             <div className="more-one">
               {data
                 .filter((item) => item.id >= min1 && item.id <= max)
                .map((data) => {
                   return (
                     <>
                       {
                         <NavLink
                           to={`/${data.id}`}
                           className={"home1"}
                           onClick={() => {
                             idHandler();
                           }}
                         >
                           <div className="related">related reads</div>
                           <img
                             src={data.image}
                             alt="not found"
                             className={"latest-card1"}
                             onClick={() => {
                               idHandler();
                             }}
                           />

                         <h4
                             className="more-main-title"
                             onClick={() => {
                               idHandler();
                             }}
                         >
                           {data.heading}
                           </h4>
                         <div
                             className="smallCard-containeer more-dev"
                             onClick={() => {
                               idHandler();
                             }}
                           >
                             <div className="smallcard-parent res-more-seren-dev hides">
                               <div>
                                 <div
                                   className="smallcard-persion-img bg hides"
                                   style={{ backgroundImage: `url(${persion})` }}
                                 ></div>
                               </div>
                               <div className="smallcard-userdata write-data hides">
                                 {/* <div></div> */}
                                 <div className="h5 hides">Vimal kumar</div>
                                 <div className="hides">14 August 2023</div>
                               </div>
                             </div>
                           </div>
                         </NavLink>
                       }
                     </>
                   );
                 })}
             </div>
           </div>
          
         </div>
        
         <button onClick={navigation} className="goBack">
          Go Back
        </button>
    </div>
  )
}

export default Innerpage