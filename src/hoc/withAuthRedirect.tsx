
import React, {Component, FC} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function WithAuthRedirect <ElementType>(Component:FC<ElementType> ) {
    const RedirectComponent = (props: MapStatePropsType) => {

        const {isAuth, ...restProps} = props;
console.log(isAuth)
         if (!isAuth) return <Navigate to={"/login"}/>

        return <Component {...restProps as ElementType}/>
    };
    return connect(mapStateToProps)(RedirectComponent)
};

export default WithAuthRedirect;