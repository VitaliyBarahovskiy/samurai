import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsPostsType = {
    posts : PostsType[]
}


const MyPosts = (props: PropsPostsType) => {

    let postsElements =
        props.posts.map( p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )

}


export default MyPosts;