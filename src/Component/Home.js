import React, { useContext } from 'react'
import { info } from '../App';
import { NavLink } from 'react-router-dom';
import './style.css'
import Footer from './Footer';

function Home() {
    const data=useContext(info)
    // console.log(contextdata);
  return (
    
    <div className="home-super-parent">
    {/* <Header /> */}
    <div className="home-first-card-containeer">
      <div className="left-side">
        {data
          .filter((item) => item.id === 59)
          .map((data) => {
            return (
              <>
                {
                  <NavLink to={`/${data.id}`} className={"home1"} >


                    <img
                      src={data.image}
                      alt="not found"
                      className={"left-card1"}
                    />
                  </NavLink>
                }
              </>
            );
          })}
      </div>
      <div className="right-side">
        {data
          .filter((item) => item.id === 59)
          .map((data) => {
            return (
              <>
                {
                  <NavLink to={`/${data.id}`} className={"home1"} >
                    <img
                      src={data.image}
                      alt="not found"
                      className={"left-card2"}
                    />
                  </NavLink>
                }
              </>
            );
          })}
        {data
          .filter((item) => item.id === 11)
          .map((data) => {
            return (
              <>
                {
                  <NavLink to={`/${data.id}`} className={"home1"} >
                    <img
                      src={data.image}
                      alt="not found"
                      className={"left-card3"}
                    />
                  </NavLink>
                }
              </>
            );
          })}
      </div>
    </div>

    <div>
      <h3 className="sub-title">The Latest</h3>
      <hr className="sub-heading-hr" />
      <div className="the-latest-parent">
        <div className="latest-one">
          {data
            .filter((item) => item.id === 1)
            .map((data) => {
              return (
                <>
                  {
                    <NavLink to={`/${data.id}`} className={"home1"} >
                      <img
                        src={data.image}
                        alt="not found"
                        className={"latest-card1"}
                      />

                      <h3>{data.heading}</h3>
                      <h5>{data.description.slice(0, 150)}...</h5>
                     
                    </NavLink>
                  }
                </>
              );
            })}
        </div>
        <div className="latest-one">
          {data
            .filter((item) => item.id === 43)
            .map((data) => {
              return (
                <>
                  {
                    <NavLink to={`/${data.id}`} className={"home1"} >
                      <img
                        src={data.image}
                        alt="not found"
                        className={"latest-card1"}
                      />
                      {/* <br/> */}
                      <h3>{data.heading}</h3>
                      <h5>{data.description.slice(0, 150)}...</h5>
                     
                    </NavLink>
                  }
                </>
              );
            })}
        </div>
        <div className="latest-one">
          {data
            .filter((item) => item.id === 99)
            .map((data) => {
              return (
                <>
                  {
                    <NavLink to={`/${data.id}`} className={"home1"} >
                      <img
                        src={data.image}
                        alt="not found"
                        className={"latest-card1"}
                      />
                      {/* <br/> */}
                      <h3>{data.heading}</h3>
                      <h5>{data.description.slice(0, 150)}...</h5>
                      
                    </NavLink>
                  }
                </>
              );
            })}
        </div>
      </div>

      <h3 className="sub-title">Latest Articles</h3>
      <hr className="sub-heading-hr" />
      <div className="latest-Articles">
        <div className="latest-Articles-parent">
          <div className="articles-one">
            <hr className="Articles-hr" />

            {data
              .filter((item) => item.id === 22)
              .map((data) => {
                return (
                  <>
                    {

                      <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"latest-card1"}
                          />
                        </div>
                        <div className="article-image-details">
                          <h3>{data.heading}</h3>
                          <h5>{data.description.slice(0, 150)}...</h5>
                          
                        </div>

                      </NavLink>
                    }
                  </>
                );
              })}
          </div>
          <div className="articles-one">
            <hr className="Articles-hr" />

            {data
              .filter((item) => item.id === 99)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"latest-card1"}
                          />
                        </div>
                        <div className="article-image-details">
                          <h3>{data.heading}</h3>
                          <h5>{data.description.slice(0, 150)}...</h5>
                          
                        </div>
                      </NavLink>
                    }
                  </>
                );
              })}
          </div>
          <div className="articles-one">
            <hr className="Articles-hr" />

            {data
              .filter((item) => item.id === 8)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"latest-card1"}
                          />
                        </div>
                        <div className="article-image-details">
                          <h3>{data.heading}</h3>
                          <h5>{data.description.slice(0, 150)}...</h5>
                          
                        </div>
                      </NavLink>
                    }
                  </>
                );
              })}
          </div>
          <div className="articles-one">
            <hr className="Articles-hr" />

            {data
              .filter((item) => item.id === 44)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1 article-image-details-parent"} >
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"latest-card1"}
                          />
                        </div>
                        <div className="article-image-details">
                          <h3>{data.heading}</h3>
                          <h5>{data.description.slice(0, 150)}...</h5>
                          
                        </div>
                      </NavLink>
                    }
                  </>
                );
              })}
          </div>
        </div>

        <div className="advatige">
          <h2 className="advatige-text">advertistment</h2>
        </div>
      </div>
      <div className="top-post">
        <div className="top-post-parent">
          <div className="top-post-image-one">
            {data
              .filter((item) => item.id === 65)
              .map((data) => {
                return (
                  <>
                    {
                      <div className="top-post-image1">
                        <NavLink to={`/${data.id}`} className={"home1 "} >
                          <img
                            src={data.image}
                            alt="not found"
                            className={"top-post-card1"}
                          />
                        </NavLink>
                      </div>
                    }
                  </>
                );
              })}
          </div>
        </div>

        <div className="top-post-details-parent ">
          <h3 className="sub-title top-post-titlehome">Top Post</h3>
          <hr className="sub-heading-hr top-post-hr" />
          <div className="top-post-con">
            <div className="top-post-one-data">

              {data
                .filter((item) => item.id === 10)
                .map((data) => {

                  return (
                    <>
                      {

                        <NavLink to={`/${data.id}`} className={"home1 "} >
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
                                
                              </div>
                              <div>
                                <span className="top-post-count">1</span>
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

                      <NavLink to={`/${data.id}`} className={"home1 top-posrt-sub-con1 top-posrt-sub-con2"} >
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"top-post-sub1-card1"}
                          />
                        </div>
                        <div>
                          <h5>{data.heading}</h5>

                          
                        </div>
                        <div>
                          <span className="top-post-count">2</span>{" "}
                        </div>
                      </NavLink>

                    }
                  </>
                );
              })}


          </div>
          <hr className="top-post-divider3" />
          <div className="latest-one top-post3">
            {data
              .filter((item) => item.id === 90)
              .map((data) => {
                return (
                  <>
                    {

                      <NavLink to={`/${data.id}`} className={"home1 top-posrt-sub-con1 top-posrt-sub-con2"} >
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"top-post-sub1-card1"}
                          />
                        </div>
                        <div>
                          <h5>{data.heading}</h5>

                         
                        </div>
                        <div>
                          <span className="top-post-count">3</span>{" "}
                        </div>
                      </NavLink>

                    }
                  </>
                );
              })}


          </div>


        </div>


      </div>
      <div className="latest-story-details-parent">

        <h3 className="sub-title top-post-titlehome1">Latest Stories</h3>
        <hr className="sub-heading-hr top-post-hr" />
        <hr className="latest-stories-divider" />
        <div className="the-latest-parent the-Stories-parent">
          <div className="latest-one story1">
            {data
              .filter((item) => item.id === 18)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1 "} >


                        <h3>{data.heading}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        
                        <hr className="hrNone"></hr>
                      </NavLink>
                    }
                  </>
                );
              })}
          </div>
          <div className="latest-one story1 ">
            {data
              .filter((item) => item.id === 19)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1 "} >

                        {/* <br/> */}
                        <h3>{data.heading}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                       

                      </NavLink>

                    }
                  </>
                );
              })}
          </div>

          <div className="latest-one story1">

            {data
              .filter((item) => item.id === 20)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1 "} >

                        {/* <br/> */}
                        <h3>{data.heading}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        
                      </NavLink>
                    }
                  </>
                );
              })}
          </div>
        </div>
        <hr className="latest-stories-divider latest-stories-divider-last" />
      </div>
    </div>
    <diV className="hFooter">
      <Footer />

    </diV>
    </div>
  )
}

export default Home