let  renderTree: (state: RootStateType) => void = () => {
    console.log('changed')
}


export  type ProfilePageType = {
    posts : Array<PostsType>,
    newPostText: string

}

export type PostsType = {
    id : number
    message: string
    likesCount: number

}

export type DialogsPageType = {
    messages : Array<MessagesType>
    dialogs : Array<DialogsType>
}

export type MessagesType = {
    id : number
    message: string
}

export type DialogsType = {
    id : number
    name: string
}

export type RootStateType = {
    profilePage : ProfilePageType
    dialogsPage : DialogsPageType


}

let state: RootStateType = {
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
        ]
    }
}

declare global {
    interface Window {
        state:any;
    }
}

window.state = state;

export let addMessage = (message:string) =>{
    let newMessage = {
        id: 5,
        message,
    }
    state.dialogsPage.messages.push(newMessage);

    renderTree(state);
}



export const addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount : 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''

    renderTree(state);
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    renderTree(state);
}

export const subscribe = (callback: (state: RootStateType) => void) =>{
    renderTree = callback;
}

export default state;