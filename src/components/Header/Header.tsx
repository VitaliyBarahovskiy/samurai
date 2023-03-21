import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return <header className={classes.header}>
        <img src="https://simotek.kh.ua/images/unsplash_brooklyn-bridge_header.jpg"/>

        <div className={classes.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;