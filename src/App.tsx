import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App (props: any) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
              <Routes>
                <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} messages={props.state.dialogsPage.messages}/>} />
                <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
              </Routes>
              </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
