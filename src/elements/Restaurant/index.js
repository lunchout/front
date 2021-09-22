import React from 'react';
import { object } from 'prop-types';
import Button from '../Button';
import {
    restaurantContainerStyle,
    restaurantContentColumnStyle,
} from './styles';
import PriceRange from '../PriceRange';
import Ratings from '../Ratings';

const Restaurant = ({ data }) => {

    return (
        <div css={restaurantContainerStyle}>
            <div css={restaurantContentColumnStyle}>
                <h1>
                    {data.name}
                </h1>
                <h2>
                    {data.categories[0].title}
                </h2>
                <h2>
                    {Math.round(data.distance)}m away
                </h2>
            </div>
            <div css={restaurantContentColumnStyle}>
                <Ratings
                    id={data.id}
                    reviewCount={data.review_count}
                    rating={data.rating}
                />
                <PriceRange selected={data.price.length} />
                <Button href={data.url}>
                    Details <i className="fas fa-external-link-alt" />
                </Button>
            </div>
        </div>
    )
};

Restaurant.propTypes = {
    data : object.isRequired,
}

export default Restaurant;
