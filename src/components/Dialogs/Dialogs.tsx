import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    DialogsPageType,
    sendMessageAC,
    StoreType,
    updateNewMessageBodyAC,
} from "../../redux/state";

type DialogsPropsType ={
    dialogsPage: DialogsPageType
    addMessage:(message:string) => void
    store: StoreType
}




const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let messagesElements = state.messages.map( (m, i) =>
        <Message key={i} id={m.id} message={m.message} addMessage={props.addMessage}/>)

    let dialogsElements = state.dialogs.map( (d, i) => <DialogItem key={i} name={d.name} />)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;