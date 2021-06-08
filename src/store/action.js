export const checkoutincrement = (id) => {
    return {
        type: 'CHECKOUT_PRODUCT_INCREMENT',
        payload: {
            id: id
        }
    }
}

export const checkoutdecrement = (id) => {
    return {
        type: 'CHECKOUT_PRODUCT_DECREMENT',
        payload: {
            id: id
        }
    }
}