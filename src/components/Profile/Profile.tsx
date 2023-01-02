import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileIndo/ProfileInfo";
import {addPost, ProfilePageType, updateNewPostText} from "../../redux/state";


type PropsProfilePageType = {
    state: ProfilePageType
}

const Profile = (props: PropsProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={addPost}
                     newPostText={props.state.newPostText}
                     message={props.state.newPostText}
                     updateNewText={updateNewPostText}
            />
        </div>
    )
}


export default Profile;