import {
 bool, func, instanceOf, number, oneOf, oneOfType, shape, string
} from 'prop-types';
import React, { useEffect } from 'react';
import { inputStyle, withUnitStyle } from './styles';

const Input = ({
    type,
    id,
    placeholder,
    required,
    myRef,
    onChange,
    onFocus,
    unit,
    autocomplete,
    defaultValue,
    disabled,
}) => {
    useEffect(() => {
        // eslint-disable-next-line no-undefined
        if (defaultValue !== undefined) {
            // eslint-disable-next-line no-param-reassign
            myRef.current.value = defaultValue;
        }
    })
    const returnInput = () => (
        <input
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
            required={required}
            ref={myRef}
            onChange={onChange}
            onFocus={onFocus}
            css={inputStyle}
            autoComplete={autocomplete ? 'on' : 'off'}
            disabled={disabled}
        />
    );

    if (unit) {
        return (
            <div css={withUnitStyle(unit)}>
                {returnInput()}
            </div>
        )
    }

    return returnInput();
};

Input.propTypes = {
    type         : oneOf(['text', 'password', 'email', 'number']).isRequired,
    id           : string.isRequired,
    placeholder  : string,
    required     : bool,
    autocomplete : bool,
    disabled     : bool,
    myRef        : oneOfType([
        func,
        shape({ current : instanceOf(Element) })
    ]),
    onChange     : func,
    onFocus      : func,
    unit         : string,
    defaultValue : oneOfType([string, number]),
};

Input.defaultProps = {
    placeholder  : null,
    disabled     : false,
    required     : false,
    autocomplete : true,
    myRef        : null,
    onChange     : null,
    onFocus      : null,
    unit         : null,
    // eslint-disable-next-line no-undefined
    defaultValue : undefined,
};

export default Input;
