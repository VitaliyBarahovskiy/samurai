import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"
import {PostsType} from "../../../redux/store";


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElementRef = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        if (props.addPost) {
            props.addPost(props.newPostText);
        }
    }


        const onPostChange = () => {
            if (newPostElementRef.current) {
                let text = newPostElementRef.current.value;
                props.updateNewPostText(text);
            }
        }

            return (

                <div className={s.postsBlock}>

                    <h3>My posts</h3>
                    <div>
                        <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              ref={newPostElementRef}
                    />
                        </div>
                        <div>
                            <button onClick={onAddPost}>Add post</button>
                        </div>
                    </div>
                    <div className={s.posts}>
                        {postsElements}
                    </div>
                </div>

            );


}

export default MyPosts