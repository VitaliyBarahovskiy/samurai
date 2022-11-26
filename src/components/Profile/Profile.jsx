import React from "react";
import classes from './Profile.module.css'


const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'/>
        </div>
        <div>
            ava + post
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div className={classes.item}>
                    post 1
                </div>
                <div  className={classes.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}


export default Profile;