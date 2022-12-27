import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsPostsType = {
    posts: PostsType[]
    addPost: (postText: string) => void
}


export const MyPosts = (props: PropsPostsType) => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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

