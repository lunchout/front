import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import cookie from 'react-cookies';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AppStateProvider from '../../components/AppStateProvider';
import Login from './index';

const simulRes = {
    token: "token",
    username: "username"
};

const server = setupServer(
    rest.post('http://localhost:8080/login', (req, res, ctx) => {
        return res(ctx.json(simulRes))
    }),
);

beforeAll(() => server.listen())
afterEach(() => {
    server.resetHandlers();
    cookie.remove('token');
})

test('filling the login form enables the login button', async () => {
    const { getByText, getByPlaceholderText } = render(
        <AppStateProvider>
            <Login />
        </AppStateProvider>
    );

    expect(getByText('Log in')).toBeDisabled();

    fireEvent.change(getByPlaceholderText('username'), {target: {value: 'username'}});
    expect(getByText('Log in')).toBeDisabled();

    fireEvent.change(getByPlaceholderText('password'), {target: {value: 'password'}});
    expect(getByText('Log in')).not.toBeDisabled();
});

test('can login successfully ', async () => {
    const { getByText, getByPlaceholderText } = render(
        <AppStateProvider>
            <Login />
        </AppStateProvider>
    );

    fireEvent.change(getByPlaceholderText('username'), {target: {value: 'username'}});
    fireEvent.change(getByPlaceholderText('password'), {target: {value: 'password'}});

    fireEvent.click(getByText('Log in'));

    await waitFor(() => {
        expect(cookie.load('token')).toEqual(simulRes.token)
    })
})