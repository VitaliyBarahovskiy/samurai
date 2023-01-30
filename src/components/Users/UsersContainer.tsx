import React, {FC} from "react";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, initialStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reduce";
import {AppStateType} from "../../redux/redux-store";




export type mapDispatchToPropsType = {
    follow: (userId: number)=>void
    unfollow: (userId: number)=>void
    setUsers: (users: UsersType[])=>void

}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType ={
    usersPage: initialStateType

}

let mapStateToProps = (state: AppStateType) : mapStateToPropsType =>{
    return {
        usersPage: state.usersPage
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
    }
}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps))(Users)