import React, { useEffect, useState } from 'react';
import Button from '../../elements/Button';
import Restaurant from '../../elements/Restaurant';
import useAppState from '../../hooks/useAppState';
import {
    backToSearchStyle,
 noResultsStyle,
 orderButtonStyle, orderContainerStyle, resultsContainerStyle, resultsGridStyle, resultsHeaderStyle
} from './styles';

const Results = () => {
    const { results, backToSearch } = useAppState();
    const [orderedByRatings, setOrderedByRatings] = useState(true);
    const [restaurants, setRestaurants] = useState(results.restaurants);

    const sortByRatings = (a, b) => {
        if (a.rating < b.rating) {
            return 1;
        }
        if (a.rating > b.rating) {
            return -1;
        }
        if (a.review_count < b.review_count) {
            return 1;
        }
        if (a.review_count > b.review_count) {
            return -1;
        }
        return 0;
    };

    const sortByProxmity = (a, b) => {
        if (a.distance > b.distance) {
            return 1;
        }
        if (a.distance < b.distance) {
            return -1;
        }
        return 0;
    }

    useEffect(() => {
        const editable = [...restaurants];

        if (orderedByRatings) editable.sort(sortByRatings);
        else editable.sort(sortByProxmity);

        setRestaurants(editable);
    }, [orderedByRatings])

    return (
        <div css={resultsContainerStyle}>
            <div css={resultsHeaderStyle}>
                <div>
                    <button css={backToSearchStyle} onClick={backToSearch} type="button">
                        <i className="fas fa-angle-left" />
                        {' Back to search'}
                    </button>
                </div>
                <div css={orderContainerStyle}>
                    <h5>Order by&nbsp;:&nbsp;</h5>
                    <div>
                        <button
                            css={orderButtonStyle(orderedByRatings)}
                            onClick={() => {
                                setOrderedByRatings(true)
                            }}
                        >
                            Ratings
                        </button>
                        {' | '}
                        <button
                            css={orderButtonStyle(!orderedByRatings)}
                            onClick={() => {
                                setOrderedByRatings(false)
                            }}
                        >
                            Proximity
                        </button>
                    </div>
                </div>
            </div>
            {restaurants.length ? (
                <div css={resultsGridStyle}>
                    {restaurants.map(res => (
                        <Restaurant data={res} key={res.id} />
                    ))}
                </div>
            ) : (
                <div css={noResultsStyle}>
                    <h1>No results</h1>
                    <Button
                        onClick={backToSearch}
                        type="button"
                    >
                        <i className="fas fa-angle-left" />
                        {' Back to search'}
                    </Button>
                </div>
            )}
            <h5>Results provided by Yelp Fusion</h5>
        </div>
    )
};

export default Results;