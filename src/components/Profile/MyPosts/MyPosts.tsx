import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"
import {PostsType} from "../../../redux/store";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";



type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />);


    const onAddPost = (values: any) => {
        console.log(values.NewPostText)
            props.addPost(values.NewPostText);
    }
            return (

                <div className={s.postsBlock}>

                    <h3>My posts</h3>
                    <AddNewPostFormRedux  onSubmit={onAddPost} />
                    <div className={s.posts}>
                        {postsElements}
                    </div>
                </div>

            );
}

const maxLenght10 = maxLengthCreator(10)

function AddNewPostForm  (props: any) {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name="NewPostText" component={Textarea} placeholder={'Post message'}
                       validate={[ requredField, maxLenght10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const  AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);


export default MyPosts