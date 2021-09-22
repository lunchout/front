import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Layout from "./Layout";
import useAppState from "../hooks/useAppState";
import Results from "../pages/Results";

const Router = () => {
    const { isLoggedIn, results } = useAppState();

    if (!isLoggedIn) return <Login />;

    return (
        <Layout>
            {!results
                ? <Home />
                : <Results />}
        </Layout>
    );
};

export default Router;
