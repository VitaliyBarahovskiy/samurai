import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../Common/FormsControls/FormsControls";
import {requredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduce";
import {Navigate} from "react-router-dom";
import styles from "./../Common/FormsControls/FormsControls.module.css"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    email: string
}


const Login = (props: any) => {

    const onSubmit = (formData: FormDataType)=> {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};




const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Email'} validate={[requredField]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} type={"password"} placeholder={'Password'} validate={[requredField]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox" /> remember Me
            </div>
            { props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <button>Login</button>

        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);