export default suggestions => {
    return suggestions.features.map(sugg => ({
        display : sugg.properties.formatted,
        value   : {
            latitude  : sugg.properties.lat,
            longitude : sugg.properties.lon,
        },
        key : sugg.properties.lat * sugg.properties.lon,
    }))
}