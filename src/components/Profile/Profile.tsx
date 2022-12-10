import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileIndo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type PropsProfilePageType = {
    state : ProfilePageType
}

const Profile = (props:PropsProfilePageType) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.state.posts}/>
    </div>
}


export default Profile;