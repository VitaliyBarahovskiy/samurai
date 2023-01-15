import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileIndo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";


type PropsProfilePageType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes )=> void
}

const Profile = (props: PropsProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     // newPostText={props.profilePage.newPostText}
                     message={props.profilePage.newPostText}
                     dispatch={props.dispatch}

            />
        </div>
    )
}


export default Profile;