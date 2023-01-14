import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import  {DialogsPageType} from "../../redux/state";

type DialogsPropsType ={
    dialogsPage: DialogsPageType
    addMessage:(message:string) => void

}




const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { props.dialogsPage.dialogs.map( (d, i) => <DialogItem key={i} name={d.name} />) }
            </div>
            <div className={classes.messages}>
                { props.dialogsPage.messages.map( (m, i) => <Message key={i} id={m.id}  message={m.message} addMessage={props.addMessage}/>)}
            </div>
        </div>
    )
}

export default Dialogs;