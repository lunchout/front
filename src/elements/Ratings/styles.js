export const ratingsContainerStyle = {
    position : 'relative',
    right    : -5,

    h5 : {
        fontSize    : 14,
        color       : '#A8A8A8',
        textAlign   : 'right',
        marginRight : 5,
    },
}

export const ratingsStyle = {
    display : 'flex',

    '& > *' : {
        fontSize   : 20,
        lineHeight : '20px',
    }
}

export const halfStarStyle = {
    position : 'relative',

    '.fa-star-half' : {
        position : 'absolute',
        top      : '0',
        left     : '0',
    }
}

export const ratingStarStyle = inColor => ({
    color : inColor ? '#FF6D01' : '#A8A8A8',
})