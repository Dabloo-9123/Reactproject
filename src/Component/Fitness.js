import React, { useState,useEffect } from 'react'
// import { info } from '../App'
import { NavLink } from 'react-router-dom'
import './style.css'
// import Footer from './Footer'
import './bolly.css'
import Header from './header'
import Footer from './Footer'
import axios from 'axios'

function Fitness() {
  const [data, setDetails] = useState("")
  console.log(data);

  useEffect(() => {
    axios.get('https://react-blog-backend-ua2p.onrender.com/data')
      .then(response => response.data)
      .then(store => {
        console.log(store, "bihari bubu")
        setDetails(store)

      }
      )
  }, [])
  console.log(data);
  return (
    <>
    <Header></Header>   
    <div className="main_box">
      <div className="box1">
        <h1 className="head">Fitness</h1>
        <hr className="head_line"/>
        <div className="news_card">
        {data && data.filter((item) => item.cat === "fitness")
                  .map((data) => {
                    return (
                      <>
                        {
                          <NavLink to={`/${data.id}`} className={"nav_link"} >
                            <div className="news_box">

                              <div>
                                
                                <img
                                  src={data.image}
                                  alt="not found"
                                  className={"img_card"}
                                />
                              </div>
                              <div className="head_card">
                                <h3>{data.heading}</h3>
                                <p>{data.description.slice(0, 150)}...</p>
                                <span className="travel">
                                  Travel
                                  <span className="travel_details">
                                  /September 15 2023
                                  </span>{" "}
                                </span>

                              </div>

                            </div>
                          </NavLink>
                        }
                      </>
                    );
                })}
                
        </div>
        
      </div>
      <div className="box2">
      <h1 className="head">Top Posts</h1>
        <hr className="head_line"/>
        {data && data.filter((item) => item.id === 70)
                .map((data) => {

                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"nav_link"} >
                          <div className="top_post">
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img1"}
                            />
                            <div>
                              <div className="top_post_data1">
                                <div>
                                  {" "}
                                  <h3>{data.heading}</h3>
                                  <div className="travel">
                                  <h4>
                                    Travel{" "}
                                    <span className="travel_details">
                                    /September 15 2023
                                    </span>{" "}
                                  </h4>
                                  </div>
                                </div>
                                <div>
                                  <span className="top-post-count">1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      }

                    </>
                  );
                })}
                 {data && data.filter((item) => item.id === 72)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top_post2">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img2"}
                            />
                          </div>
                          <div className="top_post_data2">
                            <h5>{data.heading}</h5>
                            <div className="travel">
                            <h6>
                              Travel{" "}
                              <span className="travel_details">/September 15 2023</span>{" "}
                            </h6>
                            </div>
                          </div>
                          <div>
                            <span className="top-post-count">2</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}
              {data && data.filter((item) => item.id === 74)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top_post2">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img2"}
                            />
                          </div>
                          <div className="top_post_data2">
                            <h5>{data.heading}</h5>
                            <div className="travel">
                            <h6>
                              Travel{" "}
                              <span className="travel_details">/September 15 2023</span>{" "}
                            </h6>
                            </div>
                          </div>
                          <div>
                            <span className="top-post-count">3</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}
              {data && data.filter((item) => item.id === 68)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top_post2">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img2"}
                            />
                          </div>
                          <div className="top_post_data2">
                            <h5>{data.heading}</h5>
                            <div className="travel">
                            <h6>
                              Travel{" "}
                              <span className="travel_details">/September 15 2023</span>{" "}
                            </h6>
                            </div>
                          </div>
                          <div>
                            <span className="top-post-count">4</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}
              <div className="adv">
                <h4>Advertistment</h4>
              </div>
      </div>
      </div>
      <div className='BollyFooter'>
        <Footer></Footer>

      </div>
        
        
        </>
  )
}

export default Fitness