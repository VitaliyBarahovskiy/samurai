import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";





const DialogItem = (DialogsType: any) => {
    let path = "/dialogs/" + DialogsType.id;

    return <div className={classes.dialogs + ' ' + classes.active}>
        <NavLink to={path}>{DialogsType.name}</NavLink>
    </div>
}

export default DialogItem;