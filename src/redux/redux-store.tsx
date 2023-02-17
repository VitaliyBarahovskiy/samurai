import {combineReducers} from "redux";
import { legacy_createStore as createStore } from 'redux';
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reducer";
import usersReduce from "./users-reduce";
import {authReducer} from "./auth-reduce";


export const rootReduce = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    usersPage: usersReduce,
    auth: authReducer
})


export type AppStateType = ReturnType<typeof rootReduce>

export const store = createStore(rootReduce)

export default store;

