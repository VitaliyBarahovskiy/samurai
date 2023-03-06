import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostsType, ProfileType} from "../../redux/store";

type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType | null
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;