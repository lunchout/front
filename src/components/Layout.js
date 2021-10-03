import React from 'react';
import { node } from 'prop-types';
import Header from '../elements/Header';

const layoutContainerStyle = {
    width                : '100%',
    minHeight            : '100%',
    display              : 'flex',
    flexDirection        : 'column',
    alignItems           : 'stretch',
    justifyContent       : 'flex-start',
    background           : 'url("app_bg.png")',
    backgroundPosition   : 'top center',
    backgroundSize       : 'cover',
    backgroundAttachment : 'fixed',
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
