import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../DummyData';
import './post.css';

const Post = (props) => {
    const [like, setLike] = useState(props.post.likes);
    const [isLike, setIsLike] = useState(false);

    function likeHandler(){
        setLike( isLike ? like-1 : like+1);
        setIsLike(!isLike);
    };
    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id === props.post.userId)[0].profilePicture} alt="" />
                    <span className="postUserName">{Users.filter((u) => u.id === props.post.userId)[0].userName}</span>
                    <span className="postDate">{props.post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{props.post?.desc}</span>
                <img className='postImg' src={props.post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='postLikeIcon' src="assets/icon/like.png" onClick={likeHandler} alt="" />
                    <img className='postLikeIcon' src="assets/icon/love.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{props.post.comments} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Post;