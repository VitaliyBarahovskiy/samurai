import React, {FC} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    follow,
    initialStateType,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, getUsersThunkCreator
}
    from "../../redux/users-reduce";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize:number)=>void

}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType = {
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]


}

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
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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