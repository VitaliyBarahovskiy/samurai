import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePageType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reduce";
import {Navigate, useParams} from "react-router-dom";


const ProfileContainer: React.FC = () => {
    const params = useParams();
    const profilePage = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        let userId = params.userId
        dispatch(getUserProfile(userId ? userId : '27669'))

    }, [params.userId])

    if (!isAuth) return <Navigate to={"/login"}/>

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
