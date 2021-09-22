export const autocompleteContainerStyle = {
    margin         : 0,
    padding        : 0,
    position       : 'relative',
    display        : 'flex',
    alignItems     : 'stretch',
    justifyContent : 'stretch',
    justifySelf    : 'stretch',

    input : {
        flexGrow : 1,
    },
};

export const suggestionsStyle = {
    position      : 'absolute',
    background    : 'white',
    top           : 'calc(100% + 2px)',
    width         : '100%',
    padding       : 0,
    overflow      : 'hidden',
    outline       : 0,
    borderRadius  : 5,
    fontSize      : '18px',
    border        : '1px solid white',
    zIndex        : 99,
    display       : 'flex',
    flexDirection : 'column',
    boxShadow     : '2px 2px 15px #00000099',

    button : {
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
            background : '#ff690058',
        }
    }
}