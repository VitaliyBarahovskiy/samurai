import React, {FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    follow,
    initialStateType,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, getUsersThunkCreator, UsersType
}
    from "../../redux/users-reduce";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    getPageSize,
    getUsers,
    getCurrentPage,
    getTotalUsersCount,
    getIsFetching,
    getFollowingInProgress,
} from "../../redux/users-celectors";


export type mapDispatchToPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize:number)=>void
    isFetching: boolean
    followingInProgress: Array<number>
    requestUsers: (currentPage: number, pageSize: number)=> void

}

export type UsersPropsType = initialStateType & mapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPage(pageNumber)

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {


        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType): initialStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<FC>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress, getUsersThunkCreator

    })
)(UsersContainer)