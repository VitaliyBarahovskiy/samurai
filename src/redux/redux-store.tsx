import {combineReducers} from "redux";
import { legacy_createStore as createStore } from 'redux';
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reducer";


export const rootReduce = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce
})


export type AppStateType = ReturnType<typeof rootReduce>

export const store = createStore(rootReduce)

export default store;

