
import {ActionsTypes, ProfilePageType, ProfileType} from "./store";
import {Dispatch} from "redux";
import {getProfile} from "../api/api";


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const addPostAC = (newPostText: string) => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    console.log(userId)
    getProfile(userId)
        .then(response => {

            dispatch(setUserProfile(response.data))

        })
}


export type AddPostReturnType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>



let initialState : ProfilePageType = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 5},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: "Click me",
        profile: null
}


const profileReduce = (state:ProfilePageType = initialState , action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}

        }
        default:
            return state
    }
}

export default profileReduce;