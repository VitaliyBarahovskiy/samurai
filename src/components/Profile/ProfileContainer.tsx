import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import {PostsType, ProfilePageType, ProfileType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reduce";
import {useParams} from "react-router-dom";


const  ProfileContainer: React.FC=()=>  {
    const params = useParams();
    const profilePage = useSelector<AppStateType, ProfilePageType>(state=> state.profilePage)
    const dispatch =useDispatch()

   useEffect(()=>{
       let userId = params.userId
       if(!userId){
           userId= '27669'
       }
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
           .then(response => {
               dispatch(setUserProfile(response.data))

           })

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
