export const loginPageStyle = {
    width              : '100%',
    margin             : '0',
    padding            : '0 20vw',
    display            : 'flex',
    justifyContent     : 'center',
    flexDirection      : 'column',
    alignItems         : 'center',
    height             : '100%',
    background         : 'url("login_bg.png")',
    backgroundPosition : 'top center',
    backgroundSize     : 'cover',

    h5 : {
        color      : '#CD0010',
        fontWeight : '500',
        fontSize   : 20,
        margin     : '10px 0 0 0'
    }
};

export const titleContainerStyle = {
    margin    : '15px auto',
    textAlign : 'center',

    h4 : {
        fontWeight : '500',
        margin     : '0',
        fontSize   : 24,
    }
}

export const logoStyle = {
    width        : '80vw',
    transform    : 'rotate(-8deg)',
    marginBottom : 25,

    '@media (min-width: 400px)' : {
        width    : 530,
        maxWidth : '80%',
    }
};
