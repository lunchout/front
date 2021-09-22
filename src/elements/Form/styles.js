export const formStyle = (rows, extraCss) => ({
    display             : 'grid',
    gridTemplateRows    : `repeat(${rows}, auto)`,
    gridTemplateColumns : 'auto 250px',
    rowGap              : 15,
    columnGap           : 12,
    alignItems          : 'center',
    justifyItems        : 'end',

    '*' : {
        fontSize   : '18px',
        lineHeight : '23px',
    },

    label : {
        gridColumn : '1',
        fontSize   : '18px',
    },

    '& > input, & > button' : {
        gridColumn : '2',
    },

    input : {
        justifySelf : 'stretch',
    },

    ...extraCss,
});