import React from 'react';
import classes from './../Dialogs.module.css';


type MessagePropsType ={
    id: number;
    message: string
    addMessage: (addMessage:string)=> void
}


const Message = (props: MessagePropsType) => {

    let  newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = ()=> {
        if ( newMessageElement.current) {
            props.addMessage(newMessageElement.current.value)
        }
    }


    return (
        <div
        className={classes.dialog}>{props.message}
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>)
}

export default Message;