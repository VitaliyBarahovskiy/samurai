import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../Common/FormsControls/FormsControls";
import {requredField} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const Login = () => {

    const onSubmit = (formData: FormDataType)=> {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={Input} name={'login'} placeholder={'login'} validate={[requredField]}/>
            <Field component={Input} name={'password'} placeholder={'password'} validate={[requredField]}/>
            <Field component={Input} name={'rememberMe'} type="checkbox" /> remember Me
            <button>Login</button>

        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)