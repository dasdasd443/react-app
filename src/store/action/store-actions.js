export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            item
        }
    }
}



export const checkExist = (id) => {
    return {
        type:'CHECK_EXIST',
        payload:{
            id
        }
    }
}