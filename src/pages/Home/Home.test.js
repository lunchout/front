import { render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ApolloProvider } from 'react-apollo';
import AppStateProvider from '../../components/AppStateProvider';
import { client } from "../../client";
import Home from './index';

const mockGeolocation = {
    getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
        coords: {
            latitude: 51.1,
            longitude: 45.3
        }
    }))),
    watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

const simulAttendees = {
    data : {
        allAttendees : {
            data : [
                {
                    _id : "310173509722570946",
                    name : "Gilles",
                    tastes : [
                        "Italian",
                        "Lebanese",
                        "Japanese",
                        "Belgian",
                    ],
                },
                {
                    _id : "310173535777587394",
                    name : "Vince",
                    tastes : [
                        "Italian",
                        "Lebanese",
                        "Japanese",
                    ],
                },
                {
                    _id : "310173585509449922",
                    name : "Sam",
                    tastes : [
                        "Belgian",
                    ],
                },
                {
                    _id : "310173608521498824",
                    name : "Klaas",
                    tastes : [
                        "Belgian",
                        "Japanese",
                    ],
                },
                {
                    _id : "310173623360946375",
                    name : "Gaelle",
                    tastes : [
                        "Lebanese",
                        "Japanese",
                    ],
                },
            ]
        }
    }
};

const simulLocation = {
    features : [
        {
            properties : {
                "formatted":"Chaussée de Boondael - Boondaalse Steenweg 478, 1050 Ixelles - Elsene, Belgium",
            },
        }
    ]
}

const server = setupServer(
    rest.post('https://graphql.eu.fauna.com/graphql', (req, res, ctx) => {
        return res(ctx.json(simulAttendees))
    }),

    rest.get('https://api.geoapify.com/v1/geocode/reverse', (req, res, ctx) => {
        return res(ctx.json(simulLocation))
    })
);

beforeAll(() => server.listen())
afterEach(() => {
    server.resetHandlers();
})

test('location field is disabled when user gets their current location', async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
        <ApolloProvider client={client}>
            <AppStateProvider>
                <Home />
            </AppStateProvider>
        </ApolloProvider>
    );

    const current = await waitFor(() => getByTestId("current_location_btn"));
    const locationField = await waitFor(() => getByPlaceholderText("location"));

    fireEvent.click(current);
    
    expect(locationField).toBeDisabled();
});