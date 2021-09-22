export const restaurantContainerStyle = {
    display        : 'flex',
    background     : 'white',
    borderRadius   : 5,
    justifyContent : 'space-between',
    padding        : '10px 12px',
};

export const restaurantContentColumnStyle = {
    display        : 'flex',
    flexDirection  : 'column',
    height         : '100%',
    justifyContent : 'space-between',

    'h1, h2, h5' : {
        fontWeight : 500,
        margin     : 0,
        padding    : 0,
    },

    h1 : {
        fontSize : 35,
    },

    h2 : {
        fontSize : 24,
    },

    '&:last-of-type' : {
        alignItems : 'flex-end',
    }
};