import { number, string } from 'prop-types';
import React from 'react';
import {
 halfStarStyle, ratingsContainerStyle, ratingsStyle, ratingStarStyle
} from './styles';

const Ratings = ({ rating, id, reviewCount }) => {
    const review = [...new Array(Math.floor(rating))].map((x, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <i className="fas fa-star" key={`rating_${id}_${i}`} css={ratingStarStyle(true)} />
    ));

    if (rating > review.length) {
        review.push(
            <div css={halfStarStyle}>
                <i className="far fa-star" css={ratingStarStyle(false)} />
                <i className="fas fa-star-half" css={ratingStarStyle(true)} />
            </div>
        )
    }

    let i = 5 - Math.ceil(rating);

    while (i > 0) {
        review.push(<i className="far fa-star" css={ratingStarStyle(false)} />);
        i--;
    }

    return (
        <div css={ratingsContainerStyle}>
            <div css={ratingsStyle}>
                {review}
            </div>
            <h5>{reviewCount} reviews</h5>
        </div>
    )
};

Ratings.propTypes = {
    rating      : number.isRequired,
    id          : string.isRequired,
    reviewCount : number.isRequired,
}

export default Ratings;
