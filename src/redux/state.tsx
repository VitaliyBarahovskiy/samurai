

export  type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string

}

export type PostsType = {
    id: number
    message: string
    likesCount: number

}

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type RootStateType = {
    [x: string]: any
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AddPostReturnType = ReturnType<typeof addPostAC>
export type UpdateNewPostText= ReturnType<typeof updateNewPostTextAC>
export type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
export type SendMessage = ReturnType<typeof sendMessageAC>


// export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
export type ActionsTypes = AddPostReturnType | UpdateNewPostText | UpdateNewMessageBody | SendMessage


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE ='SEND-MESSAGE'


export const addPostAC = ()  => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string) => ({type : UPDATE_NEW_POST_TEXT, newPostText: newText}) as const
export const updateNewMessageBodyAC = (body: string) => ({type : UPDATE_NEW_MESSAGE_BODY, body: body}) as const
export const sendMessageAC = () => ({type : SEND_MESSAGE}) as const





export type StoreType = {
    _state: RootStateType
    addMessage: (message:string) => void
    subscribe: (callback: (props:{store:StoreType}) => void) => void
    getState: ()=> RootStateType
    _callSubcriber: (props:{store:StoreType})=> void
    dispatch: (action: ActionsTypes )=> void


}

let store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 5},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: "Want",
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubcriber(props:{store:StoreType}) {
        console.log('changed')
    },
    addMessage(message: string){
        let newMessage = {
            id: 5,
            message,
        }
        this._state.dialogsPage.messages.push(newMessage);

        this._callSubcriber({store});
    },
    subscribe(callback: (props:{store:StoreType}) => void) {
        this._callSubcriber = callback;
    },
    dispatch: function (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubcriber({store});
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubcriber({store});
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubcriber({store});
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:6, message: body})
            this._callSubcriber({store});
        }
    }


}


export default store;
