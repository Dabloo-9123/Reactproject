import React from 'react'
import instagram1 from "../logo/instagram.jpg";
import persion from "../logo/man.png";
import youtube from "../logo/youtube.jpg";
import twitter from "../logo/twitter.jpg";
import facebbok from "../logo/facebook.jpg";
import './innerpage.css'

function SmallCard() {
  return (
    <div className="smallCard-containeer">
      <div className="smallcard-parent">
        <div>
          <div
            className="smallcard-persion-img bg"
            style={{ backgroundImage: `url(${persion})` }}
          ></div>
        </div>
        <div className="smallcard-userdata">
          <div className="h5">Dabloo Yadav</div>
          <div>August 2023</div>
        </div>
      </div>
      <div className="small-social">
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${facebbok})` }}
        ></div>{" "}
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${twitter})` }}
        ></div>{" "}
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${youtube})` }}
        ></div>
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${instagram1})` }}
        ></div>
      </div>
    </div>
  )
}

export default SmallCard