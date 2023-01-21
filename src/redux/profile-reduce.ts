import {ActionsTypes, PostsType} from "./state";

const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export const addPostAC = ()  => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string) => ({type : UPDATE_NEW_POST_TEXT, newPostText: newText}) as const


export type AddPostReturnType = ReturnType<typeof addPostAC>
export type UpdateNewPostText= ReturnType<typeof updateNewPostTextAC>



export type ActionsProfileReduceTypes = AddPostReturnType | UpdateNewPostText
export type ProfileReduceTypes = {
    newPostText: string
    posts: Array<PostsType>
}


const profileReduce = (state:ProfileReduceTypes, action:ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export default profileReduce;