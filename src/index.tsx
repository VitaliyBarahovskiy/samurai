import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";




const renderTree = () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderTree();

store.subscribe(renderTree);