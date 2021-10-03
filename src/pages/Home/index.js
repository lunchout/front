import React, { useEffect, useRef, useState } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { object } from 'prop-types';
import Button from '../../elements/Button';
import Form from '../../elements/Form';
import Input from '../../elements/Input';
import isEmptyStr from '../../utils/isEmptyStr';
import {
    attendeesContainerStyle,
    formExtraStyles, homeContainerStyle, sideContent,
    attendeeContentStyle,
    attendeeButtonStyle,
    inputsRowStyle
} from './styles';
import { geoAutocomplete, reverseGeocode } from '../../utils/callGeoapify';
import Autocomplete from '../../elements/Autocomplete';
import geoapifyParser from '../../utils/geoapifyParser';
import callApi from '../../utils/callApi';
import useAppState from '../../hooks/useAppState';
import PriceRange from '../../elements/PriceRange';

const Home = ({ data }) => {
    const locationRef = useRef(null);
    const distanceRef = useRef(null);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [locationDisabled, setLocationDisabled] = useState(false);
    const [coords, setCoords] = useState(null);
    const [attendees, setAttendees] = useState(null);
    const [whosIn, setWhosIn] = useState([]);
    const [priceRange, setPriceRange] = useState(0);
    const { setResults, srchInputs, setSrchInputs } = useAppState();

    useEffect(() => {
        if (!data.loading) {
            setAttendees(data.allAttendees.data.map(attendee => ({
                ...attendee,
                present : false,
            })))

            distanceRef.current.value = 500;

            if (srchInputs) {
                setPriceRange(srchInputs.priceRange);
                setCoords(srchInputs.coords);
                setWhosIn(srchInputs.whosIn);
                locationRef.current.value = srchInputs.locationRef;
                distanceRef.current.value = srchInputs.distanceRef;
            }
        }
    }, [data])

    const onInputChange = () => {
        setSubmitDisabled(
            isEmptyStr(locationRef.current.value) ||
            isEmptyStr(distanceRef.current.value) ||
            !whosIn.length ||
            !priceRange
        );
    };

    useEffect(() => {
        if (!data.loading) {
            onInputChange();
        }
    }, [whosIn, coords, priceRange])

    const getCurrentPosition = () => {
        setLocationDisabled(true);
        reverseGeocode((addr, pos) => {
            locationRef.current.value = addr.features[0].properties.formatted;
            const { latitude, longitude } = pos.coords;
            setCoords({ latitude, longitude });
            setLocationDisabled(false);
        })
    };

    const onLocationSelect = sugg => {
        setCoords(sugg.value);
    }

    const toggleAttendee = index => {
        const editable = [...whosIn];
        const whosInIndex = editable.findIndex(a => a === index);
        if (whosInIndex > -1) {
            editable.splice(whosInIndex, 1);
        } else {
            editable.push(index);
        }

        setWhosIn(editable);
    }

    const onPriceSelect = i => {
        setPriceRange(4 - i);
    }

    const onSubmit = async event => {
        event.preventDefault();

        setSubmitDisabled(true);

        const cuisines = []

        whosIn.forEach(index => {
            attendees[index].tastes.forEach(taste => {
                const cuisIndex = cuisines.findIndex(cuis => cuis.taste === taste);
                if (!cuisines.length || cuisIndex === -1) {
                    cuisines.push({
                        taste,
                        count : 1,
                    });
                } else {
                    cuisines[cuisIndex].count++;
                }
            })
        })

        cuisines.sort((a, b) => {
            if (a.count < b.count) {
                return 1;
            }
            if (a.count > b.count) {
                return -1;
            }
            return 0;
        })

        let i = priceRange;
        let price = '';

        while (i) {
            if (i !== priceRange) price += ',';
            price += i
            i--;
        }

        await callApi('restaurants', 'POST', {
            location : coords,
            range    : distanceRef.current.value,
            price,
            cuisines,
        }).then(res => {
            setSrchInputs({
                coords,
                priceRange,
                whosIn,
                distanceRef : distanceRef.current.value,
                locationRef : locationRef.current.value,
            });
            setResults({
                restaurants : res.data.businesses,
            });
        });
    };

    const renderAttendees = () => {
        return attendees.map((attendee, i) => {
            const isIn = whosIn.findIndex(a => a === i) > -1;
            return (
                <button
                    // eslint-disable-next-line no-underscore-dangle
                    key={`button_${attendee._id}`}
                    onClick={() => toggleAttendee(i)}
                    type="button"
                    css={attendeeButtonStyle(isIn)}
                >
                    <div css={attendeeContentStyle}>
                        {attendee.name}
                        <i
                            className={
                                `far fa-${isIn ? 'check-' : ''}square`
                            }
                        />
                    </div>
                </button>
            )
        })
    }

    if (data.loading) {
        return <h1>Loading</h1>
    }

    return (
        <div css={homeContainerStyle}>
            <h2>Let’s gather a few details before finding a place to Lunch-Out!</h2>
            <Form onSubmit={onSubmit} extraCss={formExtraStyles}>
                <>
                    <label htmlFor="location">location</label>
                    <Autocomplete
                        inputRef={locationRef}
                        onChange={onInputChange}
                        autocompleteCall={geoAutocomplete}
                        suggestionsParser={geoapifyParser}
                        onSelect={onLocationSelect}
                        disabled={locationDisabled}
                    />
                    <Button
                        type="button"
                        onClick={getCurrentPosition}
                        extraCss={sideContent}
                        disabled={locationDisabled}
                        testid="current_location_btn"
                    >
                        <i className="fas fa-location-arrow" />
                    </Button>
                </>
                <div css={inputsRowStyle}>
                    <>
                        <label htmlFor="distance">distance</label>
                        <Input
                            type="text"
                            name="distance"
                            id="distance"
                            placeholder="distance"
                            required
                            myRef={distanceRef}
                            onChange={onInputChange}
                            unit="m"
                        />
                    </>
                    <>
                        <label htmlFor="price">price range</label>
                        <PriceRange
                            onSelect={onPriceSelect}
                            selected={priceRange}
                        />
                    </>
                </div>
                <>
                    <label htmlFor="attendees">who&apos;s in</label>
                    <div css={attendeesContainerStyle}>
                        {!!attendees && renderAttendees()}
                    </div>
                </>
                <Button type="submit" disabled={submitDisabled}>
                    Search
                </Button>
            </Form>
        </div>
    )
};

Home.propTypes = {
    data : object,
};

Home.defaultProps = {
    data : null,
}

const getAllAttendees = gql`
    query query {
        allAttendees{
            data {
                _id
                name
                tastes
            }
        }
    }
`;

export default graphql(getAllAttendees)(Home);