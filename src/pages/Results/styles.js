export const resultsContainerStyle = {
    flexGrow      : 1,
    padding       : '0 5vw',
    display       : 'flex',
    flexDirection : 'column',

    '& > h5' : {
        fontSize   : 18,
        fontWeight : '400',
        margin     : '12px 0',
        padding    : 0,
        textAlign  : 'center',
    },

    '@media (min-width: 400px)' : {
        padding : '0 45px',
    }
};

export const resultsHeaderStyle = {
    width          : '100%',
    display        : 'flex',
    justifyContent : 'space-between',
    marginBottom   : 5,

    'h5, button' : {
        fontSize   : 18,
        fontWeight : '400',
        margin     : 0,
        padding    : 0,
    },

    button : {
        background : 'transparent',
        border     : 0,
        outline    : 0,
        cursor     : 'pointer',
    }
};

export const orderContainerStyle = {
    display : 'flex',
}

export const orderButtonStyle = isSelected => ({
    color      : isSelected ? '#FF6D01' : '#A8A8A8',
    fontWeight : isSelected ? '500' : '400',
})

export const backToSearchStyle = {
    color      : '#FF6D01',
    fontWeight : '500',
};

export const resultsGridStyle = {
    display       : 'flex',
    flexDirection : 'column',
    gridColumnGap : 30,
    gridRowGap    : 15,
    flexGrow      : 1,

    '@media (min-width: 400px)' : {
        display             : 'grid',
        gridTemplateColumns : '1fr 1fr',
        gridTemplateRows    : 'repeat(5, 1fr)',
        gridAutoFlow        : 'column',
    }
};

export const noResultsStyle = {
    flexGrow       : 1,
    display        : 'flex',
    flexDirection  : 'column',
    alignItems     : 'center',
    justifyContent : 'center',

    h1 : {
        fontWeight : 500,
        color      : '#CD0010',
    }
}