export const priceRangeStyle = withBackground => ({
    display        : 'flex',
    flexDirection  : 'row-reverse',
    justifyContent : 'center',
    ...(withBackground && {
        background : 'white',
        padding    : '8px 12px',
    }),
    justifySelf  : 'start',
    outline      : 0,
    borderRadius : 5,
});

export const priceRangeSelectorStyle = (isSelected, noInteract = false) => ({
    background : 'transparent',
    border     : 0,
    outline    : 0,

    ...(!noInteract ? {
        cursor : 'pointer',
        color  : 'black',

        '&:hover, &:hover ~ button' : {
            color : '#ff6900'
        },

        ...(isSelected && {

            '&, & ~ button' : {
                color : '#ff6900'
            },
        })
    } : {
        margin : 3,
        color  : '#A8A8A8',

        ...(isSelected && {
            '&, & ~ i' : {
                color : '#ff6900'
            },
        })
    }),

})