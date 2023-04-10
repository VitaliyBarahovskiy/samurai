import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore } from 'redux';
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reducer";
import usersReduce from "./users-reduce";
import {authReducer} from "./auth-reduce";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';


export const rootReduce = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    usersPage: usersReduce,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})


export type AppStateType = ReturnType<typeof rootReduce>

export const store = createStore(rootReduce, applyMiddleware(thunkMiddleware))

export default store;

