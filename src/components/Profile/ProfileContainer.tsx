import React, {FC, useEffect} from "react";
import Profile from "./Profile";
import {connect, useDispatch, useSelector} from "react-redux";
import {ProfilePageType, ProfileType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reduce";
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {compose} from "redux";



type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId : number | null
    isAuth: boolean
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


const ProfileContainer: React.FC = ()  => {
    const params = useParams();
    const profilePage = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch<any>()

    const getUserInfo = (userId: number) => {
        dispatch(getUserProfile(userId))
        dispatch(getStatus(userId))
    }

    useEffect(() => {
        let userId = params.userId
        if (userId) getUserInfo(+userId)
        else getUserInfo(27669)
        //dispatch( getUserProfile(userId ? +userId : 27669) )
        //dispatch(getStatus(userId ? +userId : 27669))

    }, [params.userId])



    return (
        <div>
            <Profile
                profile={profilePage.profile}
                status={profilePage.status}
                updateStatus={updateStatus}
            />
        </div>
    )
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default  compose<FC>(connect(mapStateToProps, {getUserProfile}), withRouter)(ProfileContainer)