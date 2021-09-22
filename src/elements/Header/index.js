import React from 'react';
import { headerContainerStyle, headerLogoStyle, logOutButton } from './styles';
import Button from '../Button'
import useAppState from '../../hooks/useAppState'

const Header = () => {
    const { logOut } = useAppState();

    return (
        <div css={headerContainerStyle}>
            <img src="/lunchout-logo.svg" alt="Lunch-Out!!" css={headerLogoStyle} />
            <Button extraCss={logOutButton} onClick={logOut}>
                Log out
            </Button>
        </div>
    )
};

export default Header;
