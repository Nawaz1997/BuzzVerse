import React from 'react';
import Online from '../online/Online';
import { Users } from '../../DummyData';
import './rightbar.css';

const Rightbar = ({profile}) => {

    function HomeRightbar(){
        return (
            <>
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
            </>
        )
    };

    function ProfileRightbar(){
        return (
            <>
                <h4 className='profileRightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City : </span>
                        <span className="rightbarInfoValue">New Delhi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From : </span>
                        <span className="rightbarInfoValue">Malviya Nagar</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship : </span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="profileRightbarTitle">User Friends</h4>
                <div className="rightbarUserFollowings">
                    <div className="rightbarUserFollowing">
                        <img className='rightbarUserFollowingImg' src="/assets/person/1.png" alt="" />
                        <span className="rightbarUserFollowingName">Abdur Raheem</span>
                    </div>
                    <div className="rightbarUserFollowing">
                        <img className='rightbarUserFollowingImg' src="/assets/person/11.png" alt="" />
                        <span className="rightbarUserFollowingName">Ayman Ahmad</span>
                    </div>
                    <div className="rightbarUserFollowing">
                        <img className='rightbarUserFollowingImg' src="/assets/person/7.png" alt="" />
                        <span className="rightbarUserFollowingName">Ankit Yadav</span>
                    </div>
                    <div className="rightbarUserFollowing">
                        <img className='rightbarUserFollowingImg' src="/assets/person/41.png" alt="" />
                        <span className="rightbarUserFollowingName">Rahmat Shaikh</span>
                    </div>
                    <div className="rightbarUserFollowing">
                        <img className='rightbarUserFollowingImg' src="/assets/person/48.png" alt="" />
                        <span className="rightbarUserFollowingName">Suhail</span>
                    </div>
                    <div className="rightbarUserFollowing">
                        <img className='rightbarUserFollowingImg' src="/assets/person/6.png" alt="" />
                        <span className="rightbarUserFollowingName">Andleeb Fatima</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
};

export default Rightbar;