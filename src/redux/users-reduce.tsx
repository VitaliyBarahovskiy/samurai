import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type initialStateType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: number[]


}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null
    followed: boolean

}

type LocationType = {
    city: string,
    country: string
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


export const followSuccess = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowSuccess= (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsers = (users: UsersType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
}) as const


export type FollowReturnType = ReturnType<typeof followSuccess>
export type UnfollowReturnType = ReturnType<typeof unfollowSuccess>
export type SetUsersReturnType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export type ActionUsersType = FollowReturnType |
    UnfollowReturnType |
    SetUsersReturnType |
    setCurrentPageType |
    setTotalUsersCountType |
    toggleIsFetchingType |
    toggleIsFollowingProgressType


let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


const usersReduce = (state: initialStateType = initialState, action: ActionUsersType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            console.log(action.users)
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getusers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<ActionUsersType>) => {
        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }

            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<ActionUsersType>) => {
        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }

            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default usersReduce;

