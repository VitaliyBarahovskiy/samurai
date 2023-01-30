export type initialStateType = {
    users: UsersType[]
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


export const followAC = (userID: number) => ({type: FOLLOW , userID}) as const
export const unfollowAC = (userID: number) => ({type: UNFOLLOW ,  userID}) as const
export const setUsersAC = (users: UsersType[]) => ({type: SET_USERS ,  users}) as const


export type FollowReturnType = ReturnType<typeof followAC>
export type UnfollowReturnType = ReturnType<typeof unfollowAC>
export type SetUsersReturnType = ReturnType<typeof setUsersAC>

export type ActionUsersType = FollowReturnType | UnfollowReturnType |SetUsersReturnType



let initialState : initialStateType = {
        users : []
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
        default:
            return state
    }
}

export default usersReduce;

