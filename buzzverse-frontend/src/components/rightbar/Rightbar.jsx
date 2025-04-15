import React from 'react';
import Online from '../online/Online';
import { Users } from '../../DummyData';
import './rightbar.css';

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/icon/gift-box.png" alt="" />
                    <span className="birthdayText"><b>Zaidi</b> and <b>2 other friends</b> have birthday today.</span>
                </div>
                <img className='rightbarAdd' src="/assets/post/Add.jpg" alt="" />
                <h4 className="onlineFriendTitle">Online Friends</h4>
                <ul className="onlineFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Rightbar;