import cookie from 'react-cookies';
import isEmptyObject from "./isEmptyObject";

export default async (
    endpoint,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const token = cookie.load('token');
    const response = await fetch(`${process.env.REACT_APP_API_BASEURL}/${endpoint}`, {
        method,
        headers : {
            'Content-Type' : 'application/json',
            ...(token && { 'Authorization' : `Bearer ${token}` }),
            ...headers
        },
        ...!isEmptyObject(body) && { body : JSON.stringify(body) },
    }).catch(e => { throw new Error(e) });

    if (response.status !== 200) {
        throw new Error(response.error);
    }

    return response.json();
};