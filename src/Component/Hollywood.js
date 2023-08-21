import React, { useContext } from 'react'
import { info } from '../App'
import { NavLink } from 'react-router-dom'
import './style.css'
import './bolly.css'
// import Footer from './Footer'
import Header from './header'
import Footer from './Footer'

function Hollywood() {
  const data = useContext(info)
  return (
    <>
    <Header></Header>
    <div className="main_box">
      <div className="box1">
        <h1 className="head">Hollywood</h1>
        <hr className="head_line"/>
        <div className="news_card">
        {data
                  .filter((item) => item.cat === "hollywood")
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
                                    /August 21 2023
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
        {data
                .filter((item) => item.id === 10)
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
                                      /August 21 2023
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
                 {data
              .filter((item) => item.id === 9)
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
                              <span className="travel_details">/August 21 2023</span>{" "}
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
              {data
              .filter((item) => item.id === 15)
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
                              <span className="travel_details">/August 21 2023</span>{" "}
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
              {data
              .filter((item) => item.id === 7)
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
                              <span className="travel_details">/August 21 2023</span>{" "}
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
     {/* <div className='Food-parent'>
        <div className='Food-containeer'>
          <h3 className="sub-title latest-food11">Hollywood</h3>
          <hr className="sub-heading-hr latest-food11" />
          <div className="latest-Articles latest-food1">
            <div className="latest-Articles-parent the-latest-food-parent">
              <div className="articles-one">


                {data
                  .filter((item) => item.cat === "hollywood")
                  .map((data) => {
                    return (
                      <>
                        {
                          <NavLink to={`/${data.id}`} className={"home1"} >
                            <div className="article-image-details-parent">

                              <div>
                                <hr className="Food-hr" />
                                <img
                                  src={data.image}
                                  alt="not found"
                                  className={"latest-card1"}
                                />
                              </div>
                              <div className="article-image-details">
                                <h3>{data.heading}</h3>
                                <h5>{data.description.slice(0, 150)}...</h5>
                                <span>
                                  Travel
                                  <span className="travel-time">
                                    /August 21 2023
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

          </div>
        </div>
        <div className="top-post-details-parent food-tops">
          <h3 className="sub-title top-post-title1">Top Post</h3>
          <hr className="sub-heading-hr top-post-hr" />
          <div className="top-post-con">
            <div className="top-post-one-data">

              {data
                .filter((item) => item.id === 71)
                .map((data) => {

                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"} >
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top-post-card2"}
                            />
                            <div>
                              <div className="top-post-data1">
                                <div>
                                  {" "}
                                  <h3>{data.heading}</h3>
                                  <h4>
                                    Travel{" "}
                                    <span className="travel-time">
                                      /August 21 2023
                                    </span>{" "}
                                  </h4>
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
            </div>
          </div>
          <hr className="top-post-divider top-post-divider2" />

          <div className="latest-one">
            {data
              .filter((item) => item.id === 79)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top-posrt-sub-con1 top-posrt-sub-con2 ">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top-post-sub1-card1"}
                            />
                          </div>
                          <div>
                            <h5>{data.heading}</h5>

                            <h6>
                              Travel{" "}
                              <span className="travel-time">/August 21 2023</span>{" "}
                            </h6>
                          </div>
                          <div>
                            <span className="top-post-count">2</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}


          </div>
          <hr className="top-post-divider3" />
          <div className="latest-one top-post3">
            {data
              .filter((item) => item.id === 75)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top-posrt-sub-con1 top-posrt-sub-con2 ">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top-post-sub1-card1"}
                            />
                          </div>
                          <div>
                            <h5>{data.heading}</h5>

                            <h6>
                              Travel{" "}
                              <span className="travel-time">/August 21 2023</span>{" "}
                            </h6>
                          </div>
                          <div>
                            <span className="top-post-count">3</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}


          </div>
          <div className="advatige advatige-Food">
            <h2 className="advatige-text advatige-text-Food ">advertistment</h2>
          </div>

        </div>

      </div>
      <div className='BollyFooter'>
        {/* <Footer></Footer> 

      </div> */}
    </>
  )
}

export default Hollywood