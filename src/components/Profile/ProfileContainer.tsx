import React, {useEffect} from "react";
import Profile from "./Profile";
import {useSelector} from "react-redux";
import {ProfilePageType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reduce";
import {useParams} from "react-router-dom";


const ProfileContainer: React.FC = () => {
    const params = useParams();
    const profilePage = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)

    useEffect(() => {
        let userId = params.userId
        if (!userId) {
            userId = '27669'
        }
        getUserProfile(userId)

    }, [])

        return (
            <div>
                <Profile
                    posts={profilePage.posts}
                    newPostText={profilePage.newPostText}
                    profile={profilePage.profile}/>
            </div>
    )
}
export default ProfileContainer
