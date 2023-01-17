import React, {useReducer} from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,Routes} from "react-router-dom";
import {ActionsTypes, StoreType} from "./redux/state";

type PropsAppType = {
    store: StoreType,



}

const App = (props: PropsAppType) => {
    const {store}=props;

    return (
            <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
              <Routes>
                <Route path="/dialogs" element={<Dialogs store={store}
                                                         addMessage={store.addMessage.bind(store)}
                                                         dialogsPage={store.getState().dialogsPage}/>} />
                <Route path="/profile" element={<Profile profilePage={store.getState().profilePage}
                                                         dispatch={store.dispatch.bind(store)} />} />

              </Routes>
              </div>
            </div>
  );
}

export default App;
