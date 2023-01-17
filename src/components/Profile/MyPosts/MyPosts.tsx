import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/state";

type PropsPostsType = {
    message: string;
    posts: PostsType[]
    dispatch: (action: ActionsTypes )=> void
}




export const MyPosts = (props: PropsPostsType) => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let  newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = ()=> {
        props.dispatch(addPostAC())
    }

    let onPostChange =() => {
        let text = newPostElement.current?.value
        props.dispatch(updateNewPostTextAC(text!))

    }


    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.message}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

