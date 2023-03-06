import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/store";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


type ProfileInfoPropsType = {
    profile: ProfileType | null
}
const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.ava}
                     src={props.profile.photos.small}
                     alt=""/>
                <ProfileStatus />
                {props.profile.aboutMe}
            </div>

        </div>
    );
};

export default ProfileInfo;