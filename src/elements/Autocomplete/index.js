import debounce from 'lodash.debounce';
import {
    bool,
 func, instanceOf, oneOfType, shape
} from 'prop-types';
import React, { useRef, useState } from 'react';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import isEmptyStr from '../../utils/isEmptyStr';
import Input from '../Input';
import { autocompleteContainerStyle, suggestionsStyle } from './styles';

const Autocomplete = ({
    inputRef,
    autocompleteCall,
    onSelect,
    onChange,
    suggestionsParser,
    disabled,
}) => {
    const wrapperRef = useRef(null);
    const [suggestions, setSuggestions] = useState(null);
    useOutsideAlerter(wrapperRef, () => setSuggestions(null));

    const debouncedAutocomplete = debounce(() => {
        if (!isEmptyStr(inputRef.current.value)) {
            autocompleteCall(inputRef.current.value)
            .then(res => {
                const parsed = suggestionsParser(res);
                setSuggestions(parsed);
            })
        }
    }, 300);

    const onFocus = event => {
        event.target.select();
        debouncedAutocomplete();
    }

    const onInputChange = () => {
        debouncedAutocomplete();
        if (onChange) onChange();
    };

    const onSuggestionSelect = sugg => {
        // eslint-disable-next-line no-param-reassign
        inputRef.current.value = sugg.display;
        setSuggestions(null);
        if (onSelect) onSelect(sugg);
    }

    return (
        <div css={autocompleteContainerStyle}>
            <Input
                type="text"
                name="location"
                id="location"
                placeholder="location"
                required
                myRef={inputRef}
                onChange={onInputChange}
                onFocus={onFocus}
                autocomplete={false}
                disabled={disabled}
            />
            {!!(Array.isArray(suggestions) && suggestions.length) && (
                <div css={suggestionsStyle} ref={wrapperRef}>
                    {suggestions.map(sugg => (
                        <button onClick={() => onSuggestionSelect(sugg)} key={`sugg_${sugg.key}`}>
                            {sugg.display}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
};

Autocomplete.propTypes = {
    inputRef : oneOfType([
        func,
        shape({ current : instanceOf(Element) })
    ]).isRequired,
    onChange          : func,
    autocompleteCall  : func.isRequired,
    onSelect          : func,
    suggestionsParser : func.isRequired,
    disabled          : bool,
};

Autocomplete.defaultProps = {
    onChange : null,
    onSelect : null,
    disabled : false,
}

export default Autocomplete;
