import React, {FC} from "react";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {
    follow,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UsersType
}
    from "../../redux/users-reduce";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";




export type mapDispatchToPropsType = {
    follow: (userId: number)=>void
    unfollow: (userId: number)=>void
    setUsers: (users: UsersType[])=>void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType ={
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean



}

class UsersConteiner extends React.Component<UsersPropsType>{




    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get( `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return  <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.usersPage.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
        </>
    }
}

let mapStateToProps = (state: AppStateType) : mapStateToPropsType =>{
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export default compose<FC>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    })
)(UsersConteiner)