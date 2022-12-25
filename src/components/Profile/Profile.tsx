import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileIndo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type PropsProfilePageType = {
    state : ProfilePageType
    addPost: (postText: string ) => void
}

const Profile = (props:PropsProfilePageType) => {

    return (
    <div>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
    )
}


export default Profile;