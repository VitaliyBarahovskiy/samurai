import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-HD.png' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )

}

export default Post;