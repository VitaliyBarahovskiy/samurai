import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals"




const renderTree = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
renderTree.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>
);

reportWebVitals();
