import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + '' + classes.active}>
                    <NavLink to="/dialog1">Vitali</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog2">Mark</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog3">Masha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog4">Anton</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog5">Lera</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialog6">Cristy</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>Hi</div>
                <div className={classes.dialog}>How is your my face?</div>
                <div className={classes.dialog}>I love you</div>
            </div>
        </div>
    )
}


export default Dialogs;