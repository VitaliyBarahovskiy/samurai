import {ActionsTypes, DialogsType, MessagesType} from "./state";




export type DialogsReduceTypes = {
    newMessageBody: string
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}


export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessage = ReturnType<typeof sendMessageAC>


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) as const
export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const


const dialogsReduce = (state: DialogsReduceTypes, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}

export default dialogsReduce;