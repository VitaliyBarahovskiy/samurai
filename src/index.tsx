import './index.css';
import App from './App';
import state, {RootStateType, subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";




const renderTree = (state:RootStateType) => {
    render(
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderTree(state);

subscribe(renderTree);