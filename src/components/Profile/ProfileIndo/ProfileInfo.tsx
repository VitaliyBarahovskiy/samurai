import React from "react";
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'/>
        </div>
        <div className={classes.discriptionBlock}>
            ava + post
        </div>
    </div>
}


export default ProfileInfo;