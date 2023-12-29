// project details

import React from 'react'
import "../../App.css"
import leaf_diseases from '../../Assets/leaf_diseases.jpg';
import Athletics_hq from '../../Assets/Athletics_hq.jpg';
import Portfolio from '../../Assets/Portfolio.png';
import travel_img from '../../Assets/travel_img.avif';
import Yoga_wise from '../../Assets/Yoga_wise.avif';
import Uploadingvideo from '../../Assets/Uploadingvideo.webp';
import user from '../../Assets/user.avif';



function Card() {
  return (
    <>
   
      <div className='card-container'>
      <div className="card_main_title">
      <h3 className='card-heading'>Projects</h3>
    </div>
        <div className="cards">
          <a href='https://github.com/tpabhirami03?tab=repositories' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={leaf_diseases} alt="" />
              </div>
              <div className="card-text">
                <h3>Leaf Disease Detection</h3>
                <span>Python,Degree project</span>

              </div>

            </div>
          </a>
         <a href='https://github.com/tpabhirami03?tab=repositories'  target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={Athletics_hq} alt="" />
              </div>
              <div className="card-text">
                <h3>Athletics HQ</h3>
                <span>REACT ,pg project</span>
  
              </div></div>
         </a>
         <a href='https://656234cbfbcc7556dec6516b--inspiring-maamoul-3d7ce8.netlify.app/' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={Portfolio} alt="" />
              </div>
              <div className="card-text">
                <h3>Portfolio</h3>
                <span>React,React Material UI</span>
  
              </div></div>
          </a>
          <a href='https://github.com/tpabhirami03?tab=repositories' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={travel_img} alt="" />
              </div>
              <div className="card-text">
                <h3>Travel Website</h3>
                <span>Html,Css,Bootstrap5</span>
  
              </div></div>
  
          </a>

          <a href='https://github.com/tpabhirami03?tab=repositories' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={Yoga_wise} alt="" />
              </div>
              <div className="card-text">
                <h3>Yoga Wise</h3>
                <span>React,Html,Css,Bootstrap5</span>
  
              </div></div>
  
          </a>
          <a href='https://github.com/tpabhirami03?tab=repositories' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={Uploadingvideo} alt="" />
              </div>
              <div className="card-text">
                <h3>Video Uploading</h3>
                <span>React,Node js</span>
  
              </div></div>
  
          </a>

          <a href='https://github.com/tpabhirami03?tab=repositories' target='_blank'>
            <div className='card-content'>
              <div className="card-image">
                <img src={user} alt="" />
              </div>
              <div className="card-text">
                <h3>User Details</h3>
                <span>React,Node js</span>
  
              </div></div>
  
          </a>
          
        </div>





      </div>
    </>
  )
}

export default Card