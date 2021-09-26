import React, { useEffect, useRef, useState } from 'react';
import cookie from 'react-cookies';
import Button from '../../elements/Button';
import Form from '../../elements/Form';
import Input from '../../elements/Input';
import useAppState from '../../hooks/useAppState';
import callApi from '../../utils/callApi';
import isEmptyStr from '../../utils/isEmptyStr';
import {
    loginPageStyle, logoStyle, titleContainerStyle
} from './styles';

const Login = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const { setIsLoggedIn } = useAppState();

    const onSubmit = async event => {
        event.preventDefault();
        await callApi('login', 'POST', {
            username : usernameRef.current.value,
            password : passwordRef.current.value,
        }).then(res => {
            cookie.save('token', res.token);
            setIsLoggedIn(true);
        });
    };

    const onInputChange = () => {
        setSubmitDisabled(
            isEmptyStr(usernameRef.current.value) ||
            isEmptyStr(passwordRef.current.value)
        );
    };

    useEffect(() => {
        onInputChange();
    })

    return (
        <div css={loginPageStyle}>
            <img src="/lunchout-logo.svg" alt="Lunch-Out!!" css={logoStyle} />
            <div css={titleContainerStyle}>
                <h4>Welcome to Lunch-Out!</h4>
                <h4>Please log in.</h4>
            </div>
            <Form onSubmit={onSubmit}>
                <>
                    <label htmlFor="username">username</label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        required
                        myRef={usernameRef}
                        onChange={onInputChange}
                    />
                </>
                <>
                    <label htmlFor="password">password</label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        required
                        myRef={passwordRef}
                        onChange={onInputChange}
                    />
                </>
                <Button type="submit" disabled={submitDisabled}>
                    Log in
                </Button>
            </Form>
        </div>
    );
};

export default Login;