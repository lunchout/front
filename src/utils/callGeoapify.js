export const geoAutocomplete = async text => {
    const response = await fetch(`${process.env.REACT_APP_GEOAPIFY_URL}/autocomplete?text=${text}&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`, {
        method : 'GET',
    }).catch(e => { throw new Error(e) });

    return response.json();
};

const reverseCoords = async pos => {
    const { latitude, longitude } = pos;

    const response = await fetch(`${process.env.REACT_APP_GEOAPIFY_URL}/reverse?lat=${latitude}&lon=${longitude}&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`, {
        method : 'GET',
    }).catch(e => { throw new Error(e) });

    return (response.json());
}

export const reverseGeocode = callback => {
    navigator.geolocation.getCurrentPosition(res => {
        reverseCoords(res.coords).then(addr => {
            callback(addr, res)
        });
    }, e => {
        throw new Error(e);
    });
}