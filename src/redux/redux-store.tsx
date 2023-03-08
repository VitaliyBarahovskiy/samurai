import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore } from 'redux';
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reducer";
import usersReduce from "./users-reduce";
import {authReducer} from "./auth-reduce";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


export const rootReduce = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    usersPage: usersReduce,
    auth: authReducer,
    form: formReducer
})


export type AppStateType = ReturnType<typeof rootReduce>

export const store = createStore(rootReduce, applyMiddleware(thunkMiddleware))

export default store;

