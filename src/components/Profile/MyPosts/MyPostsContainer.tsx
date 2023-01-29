import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reduce";

import {AppStateType, store} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";




let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC(store.getState().profilePage.newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;