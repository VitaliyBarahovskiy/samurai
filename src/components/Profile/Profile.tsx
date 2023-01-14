import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileIndo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";


type PropsProfilePageType = {
    profilePage: ProfilePageType
    addPost: (PostText: string) =>void
    updateNewPostText:(newPostText:string)=> void
}

const Profile = (props: PropsProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     message={props.profilePage.newPostText}
                     updateNewText={props.updateNewPostText}
            />
        </div>
    )
}


export default Profile;