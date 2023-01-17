import './index.css';
import App from './App';
import store, {ActionsTypes, StoreType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";


type RenderTreePropsType={
    store:StoreType
}


const renderTree = (props:RenderTreePropsType) => {
    const{store}=props;
    render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderTree({store:store});

store.subscribe(renderTree);

// renderTree();