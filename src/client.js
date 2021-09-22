import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri     : process.env.REACT_APP_FAUNA_URL,
    headers : {
        authorization : `Bearer ${process.env.REACT_APP_FAUNA_SECRET}`,
    },
    cache : new InMemoryCache(),
});