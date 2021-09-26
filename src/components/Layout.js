import React from 'react';
import { node } from 'prop-types';
import Header from '../elements/Header';

const layoutContainerStyle = {
    width          : '100%',
    height         : '100%',
    display        : 'flex',
    flexDirection  : 'column',
    alignItems     : 'stretch',
    justifyContent : 'flex-start',
}

const Layout = ({
    children
}) => {
    return (
        <div css={layoutContainerStyle}>
            <Header />
            {children}
        </div>
    )
};

Layout.propTypes = {
    children : node.isRequired,
};

export default Layout;
