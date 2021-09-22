import React from 'react';
import AppStateProvider from './components/AppStateProvider';
import Router from './components/Router';

const App = () => (
    <AppStateProvider>
        <Router />
    </AppStateProvider>
);

export default App;
