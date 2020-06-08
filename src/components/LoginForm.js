import React, {Component} from 'react';
import FormInput from "./FormInput";
import FormBtn from "./FormBtn";

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Login">
                <form className="form-ajax" noValidate>

                    <FormInput placeholder="Логин" id="login"/>

                    <FormInput type="password" placeholder="Пароль" id="password"/>

                    <FormBtn text="Активировать ДНК-тест"/>

                </form>
            </div>
        );
    }
}

export default LoginForm;