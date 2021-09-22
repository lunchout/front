export const headerContainerStyle = {
    height         : 70,
    display        : 'flex',
    flexDirection  : 'row',
    alignItems     : 'center',
    justifyContent : 'center',
    flexShrink     : 0,
    position       : 'relative',
};

export const headerLogoStyle = {
    height : 40,
};

export const logOutButton = {
    background  : '#e63a20',
    borderColor : '#e63a20',
    position    : 'absolute',
    right       : 12,

    '&:active' : {
        borderColor : '#e63a20',
        color       : '#e63a20',
        background  : 'white',
    },
}