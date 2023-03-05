import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(withAuthRedirect(Dialogs));