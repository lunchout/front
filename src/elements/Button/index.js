import {
 bool, func, node, object, string
} from 'prop-types';
import React from 'react';
import { buttonStyle } from './styles';

const Button = ({
 disabled, extraCss, type, onClick, children, href, testid,
 }) => {
    if (href) {
        return (
            <a href={href} css={buttonStyle(extraCss)} target="_blank" rel="noreferrer" data-testid={testid}>
                {children}
            </a>
        )
    }

    return (
        <button
            type={type}
            disabled={disabled}
            {...(onClick && { onClick })}
            onClick={onClick}
            css={buttonStyle(extraCss)}
            data-testid={testid}
        >
            {children}
        </button>
    )
};

Button.propTypes = {
    disabled : bool,
    extraCss : object,
    type     : string,
    onClick  : func,
    href     : string,
    children : node.isRequired,
    testid   : string,
};

Button.defaultProps = {
    disabled : false,
    extraCss : {},
    type     : "button",
    onClick  : null,
    href     : null,
    testid   : null,
};

export default Button;
