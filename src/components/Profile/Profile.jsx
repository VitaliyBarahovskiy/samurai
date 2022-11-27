import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div>
        <div>
            <img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'/>
        </div>
        <div>
            ava + post
        </div>
        <MyPosts />
    </div>
}


export default Profile;