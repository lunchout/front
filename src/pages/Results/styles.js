export const resultsContainerStyle = {
    flexGrow      : 1,
    padding       : '0 45px 25px',
    display       : 'flex',
    flexDirection : 'column',
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
    }
};

export const orderContainerStyle = {
    display : 'flex',
}

export const orderButtonStyle = isSelected => ({
    color      : isSelected ? '#FF6D01' : '#A8A8A8',
    fontWeight : isSelected ? '500' : '400',
    background : 'transparent',
    border     : 0,
    outline    : 0,
    padding    : 0,
    margin     : 0,
    cursor     : 'pointer',
})

export const resultsGridStyle = {
    display             : 'grid',
    gridTemplateColumns : '1fr 1fr',
    gridTemplateRows    : 'repeat(5, 1fr)',
    gridAutoFlow        : 'column',
    gridColumnGap       : 30,
    gridRowGap          : 15,
    flexGrow            : 1,
}