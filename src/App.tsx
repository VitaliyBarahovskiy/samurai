import React, {useEffect} from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/redux-store';
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";


const App = () => {

    const dispatch = useDispatch()
    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    console.log(initialized)
    useEffect(() => {
        // @ts-ignore
        dispatch(initializeApp())
    }, [])


    return (
        !initialized ? <Preloader/>
            :
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path="/profile" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
                    </Route>


                    <Route path="/dialogs" element={<DialogsContainer />} />


                    <Route path="/users" element={<UsersContainer />} />

                    <Route path="/login" element={<LoginPage />} />

                </Routes>
            </div>
        </div>
    );
}

export default App;
