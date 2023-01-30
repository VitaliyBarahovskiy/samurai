import {ActionsTypes, DialogsPageType} from "./store";




export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessage = ReturnType<typeof sendMessageAC>


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) as const
export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const



let initialState: DialogsPageType= {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your cry?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Vitali'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    newMessageBody: ''
}


const dialogsReduce = (state: DialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}]
            };
        default:
            return state;
    }
}

export default dialogsReduce;