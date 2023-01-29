import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/store";


type DialogsPropsType ={
    updateNewMessageBody: (body:string) => void
    sendMessage: () => void
    dialogs: Array<DialogsType>
    newMessageBody : string
    messages: Array<MessagesType>
}




const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {

        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'
                              cols={40} rows={5}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;