import React, {FC, useEffect} from "react";
import Profile from "./Profile";
import {connect, useDispatch, useSelector} from "react-redux";
import {ProfilePageType, ProfileType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reduce";
import {useLocation, useParams, useNavigate, createBrowserRouter} from "react-router-dom";
import {compose} from "redux";


type PathParamsType = {
    userId: string | undefined
}
type PropsType = PathParamsType & MapStatePropsType
//
// type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType
//
// type MapStateToPropsType = {
//     profile: ProfileType | null
//     status: string
//
// }
//
// type MapDispatchToPropsType = {
//     getUsersProfile: (userId: number) => void
//     getStatus: (userId: number) => void
//     updateStatus: (status: string) => void
// }

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
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
        status: state.profilePage.status
    }
}


export default  compose<FC>(connect(mapStateToProps, {getUserProfile}), withRouter)(ProfileContainer)