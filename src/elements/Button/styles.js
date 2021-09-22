export const buttonStyle = extraCss => ({
    padding        : '8px 46px',
    border         : '2px solid #ff6900',
    outline        : 0,
    background     : '#ff6900',
    color          : 'white',
    borderRadius   : 5,
    cursor         : 'pointer',
    transition     : 'all .2s ease-in',
    textDecoration : 'none',

    '&:hover, &:focus' : {
        borderColor : 'white',
    },

    '&:visited' : {
        background : '#ff6900',
        color      : 'white',
    },

    '&:active' : {
        borderColor : '#ff6900',
        color       : '#ff6900',
        background  : 'white',
    },

    '&:disabled' : {
        borderColor : '#a8a8a8',
        color       : '#a8a8a8',
        background  : 'white',
        cursor      : 'not-allowed',
    },

    ...extraCss,
});