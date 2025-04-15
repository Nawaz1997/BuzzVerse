import React from 'react';
import './closeFriends.css'

const CloseFriends = ({user}) => {
  return (
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.userName}</span>
    </li>
  )
};

export default CloseFriends;