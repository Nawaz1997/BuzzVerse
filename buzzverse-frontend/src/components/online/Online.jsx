import React from 'react';
import './online.css';

const Online = ({user}) => {
  return (
        <li className="onlineFriend">
            <div className="onlineFriendProfileImgContainer">
                <img className='onlineFriendImg' src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="onlineFriendName">{user.userName}</span>
        </li>
    )
};

export default Online;