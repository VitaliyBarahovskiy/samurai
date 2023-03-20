import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/store";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requredField} from "../../utils/validators/validators";


type DialogsPropsType ={
    isAuth: boolean;
    updateNewMessageBody: (body:string) => void
    sendMessage: (newMessageBody: string) => void
    dialogs: Array<DialogsType>
    newMessageBody : string
    messages: Array<MessagesType>
}




const Dialogs = (props: DialogsPropsType): JSX.Element => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    let newMessageBody = props.newMessageBody;


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />

            </div>
        </div>
    )
}


const maxLenght50 = maxLengthCreator(50)

const AddMessageForm = (props: any ) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[requredField, maxLenght50]}
                    name='newMessageBody'
                    placeholder={'Enter your message'}
                />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;