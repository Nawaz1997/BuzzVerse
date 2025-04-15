import React from 'react';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './share.css';

const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/46.png" alt="" />
          <input className='shareInput' type="text" placeholder="What's in your mind nawaz?"/>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor='red' className='shareIcon'/>
              <span className="shareIconText">Image or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor='blue' className='shareIcon'/>
              <span className="shareIconText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor='green' className='shareIcon'/>
              <span className="shareIconText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
              <span className="shareIconText">Feelings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
};

export default Share;