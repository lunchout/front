import ReactDOM from 'react-dom';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from "./client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const initComponent = () => {
    ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.querySelector('#root'),
    );
};

initComponent();
reportWebVitals();