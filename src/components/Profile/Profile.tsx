import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileIndo/ProfileInfo";
import {addPost, ProfilePageType} from "../../redux/state";


type PropsProfilePageType = {
    state: ProfilePageType

}

const Profile = (props: PropsProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts } addPost={addPost}/>
        </div>
    )
}


export default Profile;