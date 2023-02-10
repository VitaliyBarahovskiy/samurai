import React, {FC} from "react";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reduce";
import {AppStateType} from "../../redux/redux-store";




export type mapDispatchToPropsType = {
    follow: (userId: number)=>void
    unfollow: (userId: number)=>void
    setUsers: (users: UsersType[])=>void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void

}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType ={
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number


}

let mapStateToProps = (state: AppStateType) : mapStateToPropsType =>{
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps))(Users)