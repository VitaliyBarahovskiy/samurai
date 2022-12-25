import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {RootStateType} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";


addPost('hey')


export const renderTree = (state:RootStateType) => {
    render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
renderTree(state);



reportWebVitals();
