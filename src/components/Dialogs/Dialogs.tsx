import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import state, {DialogsPageType} from "../../redux/state";

type DialogsPropsType ={
    state: DialogsPageType
}



const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { props.state.dialogs.map( (d, i) => <DialogItem key={i} name={d.name} />) }
            </div>
            <div className={classes.messages}>
                { props.state.messages.map( (m, i) => <Message key={i} id={m.id}  message={m.message}/> ) }
            </div>
        </div>
    )
}

export default Dialogs;