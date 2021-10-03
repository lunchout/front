import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import cookie from 'react-cookies';

export const AppStateContext = createContext(null);

const AppStateProvider = ({ children, ...props }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!cookie.load('token'));
    const [srchInputs, setSrchInputs] = useState(null);
    const [results, setResults] = useState(null);

    const logOut = () => {
        cookie.remove('token');
        setResults(null);
        setIsLoggedIn(false);
        setSrchInputs(null);
    };

    const backToSearch = () => {
        setResults(null);
    }

    const defaultState = {
        isLoggedIn,
        setIsLoggedIn,
        results,
        setResults,
        logOut,
        backToSearch,
        srchInputs,
        setSrchInputs
    };

    return (
        <AppStateContext.Provider value={{
            ...defaultState,
            ...props,
        }}
        >
            {children}
        </AppStateContext.Provider>
    );
}

AppStateProvider.propTypes = {
    children : node.isRequired,
};

export default AppStateProvider;
