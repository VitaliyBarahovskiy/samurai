import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,Routes} from "react-router-dom";
import state, { RootStateType} from "./redux/state";



type AppStateType= {
    state: RootStateType,


}


function App (props:AppStateType) {



    return (
            <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
              <Routes>
                <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}  />} />
                <Route path="/profile" element={<Profile state={props.state.profilePage}  />} />
              </Routes>
              </div>
            </div>
  );
}

export default App;
