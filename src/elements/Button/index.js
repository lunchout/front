import {
 bool, func, node, object, string
} from 'prop-types';
import React from 'react';
import { buttonStyle } from './styles';

const Button = ({
 disabled, extraCss, type, onClick, children, href,
 }) => {
    if (href) {
        return (
            <a href={href} css={buttonStyle(extraCss)} target="_blank" rel="noreferrer">
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
};

Button.defaultProps = {
    disabled : false,
    extraCss : {},
    type     : "button",
    onClick  : null,
    href     : null,
};

export default Button;
