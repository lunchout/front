import { func, node, object } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { formStyle } from './styles';

const Form = ({ onSubmit, children, extraCss }) => {
    const formRef = useRef(null);
    const [rows, setRows] = useState(0);

    useEffect(() => {
        const innerElements = formRef.current.innerHTML;
        const count = (innerElements.match(/<label/g) || []).length;
        setRows(count + 1)
    }, [formRef])

    return (
        <form onSubmit={onSubmit} css={formStyle(rows, extraCss)} ref={formRef}>
            {children}
        </form>
    )
};

Form.propTypes = {
    onSubmit : func.isRequired,
    children : node.isRequired,
    extraCss : object,
};

Form.defaultProps = {
    extraCss : {},
}

export default Form;
