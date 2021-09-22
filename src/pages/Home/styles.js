export const homeContainerStyle = {
    maxWidth      : 830,
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    margin        : '120px auto auto',
    flexGrow      : 1,

    h2 : {
        maxWidth   : 375,
        fontWeight : '400',
        fontSize   : '24px',
        lineHeight : '31px',
        textAlign  : 'center',
    }
};

export const formExtraStyles = {
    gridTemplateColumns : 'auto 600px auto',

    '& > button' : {
        gridColumnStart : '2',
        gridColumnEnd   : '4',
    }
};

export const sideContent = {
    gridColumn : '3 !important',
    padding    : '8px 12px',
};

export const inputsRowStyle = {
    gridColumnStart : '1',
    gridColumnEnd   : '4',
    display         : 'flex',
    flexDirection   : 'row',
    justifyContent  : 'flex-start',
    alignItems      : 'center',
    width           : '100%',

    '& > *:not(:last-child)' : {
        marginRight : 12,
    },

    '& > div' : {
        flexGrow : 1,

        '&:first-of-type' : {
            marginRight : 24,
            flexGrow    : 2,
        },
    }
}

export const attendeesContainerStyle = {
    background      : 'white',
    width           : '100%',
    padding         : 0,
    overflow        : 'hidden',
    outline         : 0,
    borderRadius    : 5,
    fontSize        : '18px',
    border          : '1px solid white',
    transition      : 'all .2s linear',
    display         : 'flex',
    flexDirection   : 'column',
    gridColumnStart : '2',
    gridColumnEnd   : '4',
};

export const attendeeButtonStyle = present => ({
    color      : present ? '#ff6900' : 'black',
    background : 'transparent',
    border     : 0,
    outline    : 0,
    padding    : '8px 12px',
    fontWeight : '500',
    fontSize   : '18px',
    margin     : 0,
    textAlign  : 'left',
    width      : '100%',
    cursor     : 'pointer',

    '&:hover' : {
        background : present ? '#ff6900' : '#ff690058',
        color      : present ? 'white' : 'black',
    }

});

export const attendeeContentStyle = {
    display        : 'flex',
    flexDirection  : 'row',
    justifyContent : 'space-between',
    width          : '100%',
}