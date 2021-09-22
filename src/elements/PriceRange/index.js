import { func, number } from 'prop-types';
import React from 'react';
import makeId from '../../utils/makeId';
import { priceRangeSelectorStyle, priceRangeStyle } from './styles';

const PriceRange = ({ onSelect, selected }) => (
    <div css={priceRangeStyle(!!onSelect)}>
        {[...new Array(4)].map((x, i) => (
            onSelect
            ? (
                <button
                    type="button"
                    css={priceRangeSelectorStyle(selected === (4 - i))}
                    onClick={() => onSelect(i)}
                    key={makeId(12)}
                >
                    <i className="fas fa-euro-sign" />
                </button>
            )
            : (<i className="fas fa-euro-sign" css={priceRangeSelectorStyle(selected === (4 - i), true)} />)
        ))}
    </div>
)

PriceRange.propTypes = {
    onSelect : func,
    selected : number.isRequired,
};

PriceRange.defaultProps = {
    onSelect : null,
};

export default PriceRange;