export const inputStyle = {
    padding      : '8px 12px',
    outline      : 0,
    background   : 'white',
    borderRadius : 5,
    fontSize     : '18px',
    border       : '1px solid white',
    transition   : 'all .2s ease-in',

    '&:hover' : {
        borderColor : 'rgba(0,0,0,.5)',
    },

    '&:focus' : {
        borderColor : '#ff6900',
        color       : '#ff6900',
    },

    '&:disabled' : {
        background  : '#white',
        borderColor : '#a8a8a8',
        color       : '#A8A8A8'
    }
};

export const withUnitStyle = unit => ({
    margin         : 0,
    padding        : 0,
    height         : 'content-fit',
    position       : 'relative',
    display        : 'flex',
    alignItems     : 'stretch',
    justifyContent : 'stretch',
    justifySelf    : 'stretch',

    input : {
        flexGrow : 1,
    },

    '&::after' : {
        content    : `"${unit}"`,
        fontSize   : '18px',
        lineHeight : '23px',
        display    : 'block',
        position   : 'absolute',
        right      : 12,
        bottom     : 8,
        zIndex     : 98,
    }
})