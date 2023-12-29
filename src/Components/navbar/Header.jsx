import React from 'react';

import '../../App.css';
import ProfilePic from '../../Assets/ProfilePic.jpg'


function Header() {
    return (
        <> 
       
            <div className='nav_home_section'>
                <div className='Details_Section'>
                    <div className="image">
                        <img src={ProfilePic} alt="" />
                    </div>
                    <div className="Name_Details">
                        <h3>Abhirami T P</h3>
                        <span>Web Developer</span>
                    </div>
                </div>
               
            </div>
        </>
    );
}

export default Header;
