import cookie from 'react-cookies';
import isEmptyObject from "./isEmptyObject";

export default (
    endpoint,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const token = cookie.load('token');
    return fetch(`${process.env.REACT_APP_API_BASEURL}/${endpoint}`, {
        method,
        headers : {
            'Content-Type' : 'application/json',
            ...(token && { 'Authorization' : `Bearer ${token}` }),
            ...headers
        },
        ...!isEmptyObject(body) && { body : JSON.stringify(body) },
    }).then(response => {
        if (!response.ok || response.status !== 200) {
            return response.text().then(error => {
                return ({ error, status : response.status })
            });
        }

        return response.json().then(data => {
            return ({ data, status : response.status })
        });
    });
};