import React, {FC} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reduce";

type MapStatePropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setAuthUserData: (
        userId: number,
        email: string,
        login: string) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props}
                       userId={this.props.userId}
                       email={this.props.email}
                       login={this.props.login}
        />;
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}

export default compose<FC>(connect(mapStateToProps, {setAuthUserData}))(HeaderContainer)