export type initialStateType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number

}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null |  string
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


export const followAC = (userID: number) => ({type: FOLLOW , userID}) as const
export const unfollowAC = (userID: number) => ({type: UNFOLLOW ,  userID}) as const
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS ,  users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}) as const


export type FollowReturnType = ReturnType<typeof followAC>
export type UnfollowReturnType = ReturnType<typeof unfollowAC>
export type SetUsersReturnType = ReturnType<typeof setUsersAC>
export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

export type ActionUsersType = FollowReturnType | UnfollowReturnType |SetUsersReturnType | setCurrentPageType | setTotalUsersCountType



let initialState : initialStateType = {
        users : [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 2
}


const usersReduce = (state:initialStateType = initialState , action: ActionUsersType):initialStateType => {
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state
    }
}

export default usersReduce;

