import React, {FC, useEffect} from "react";
import Profile from "./Profile";
import {connect, useDispatch, useSelector} from "react-redux";
import {PostsType, ProfilePageType, ProfileType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reduce";
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {compose} from "redux";



type MapStatePropsType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType | null
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


const ProfileContainer: React.FC = () => {
    const params = useParams();
    const profilePage = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        let userId = params.userId
        dispatch(getUserProfile(userId ? userId : '27669'))

    }, [params.userId])



    return (
        <div>
            <Profile
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                profile={profilePage.profile}/>
        </div>
    )
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        // isAuth: state.auth.isAuth
    }
}


export default  compose<FC>(connect(mapStateToProps, {getUserProfile}), withRouter)(ProfileContainer)