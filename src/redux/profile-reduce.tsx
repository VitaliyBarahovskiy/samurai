
import {ActionsTypes, ProfilePageType} from "./store";


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export const addPostAC = (newPostText: string) => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newText}) as const


export type AddPostReturnType = ReturnType<typeof addPostAC>
export type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>



let initialState : ProfilePageType = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 5},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: "Want",
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
        default:
            return state
    }
}

export default profileReduce;