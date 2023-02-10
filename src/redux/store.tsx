import profileReduce, {AddPostReturnType, UpdateNewPostText} from "./profile-reduce";
import dialogsReduce, {SendMessage, UpdateNewMessageBody} from "./dialogs-reducer";


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
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type ActionsTypes = AddPostReturnType | UpdateNewPostText | UpdateNewMessageBody | SendMessage




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

        this._callSubcriber({store: store});
    },
    subscribe(callback: (props:{store:StoreType}) => void) {
        this._callSubcriber = callback;
    },
    dispatch (action: ActionsTypes) {

        this._state.profilePage = profileReduce(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduce(this._state.dialogsPage, action)
        this._callSubcriber({store: store});

    }


}


export default store;